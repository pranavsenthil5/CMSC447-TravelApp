'use client'
import Image from 'next/image'
import Description from './support/description'
import ImageGrid from './support/imageGrid'
import React, { use } from 'react'


import { useState, useEffect } from 'react';

export default function SavedPost(collection_id) {
  var [currentPost, setCurrentPost] = useState(0);

  const [loading, setLoading] = useState(false);
  const [postContent, setPostContent] = useState({});
  const [allPosts, setAllPosts] = useState([]);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {

    const url = `http://127.0.0.1:8080/api/post/from_collection/${collection_id['collection_id']}`;

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    const options = {
      method: 'GET',
      headers: headers,
      mode: 'cors',
    };

    console.log('YYo');

    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('API data:', data);

        data.forEach(post => {
          post.description = post.description.replace(/\\n/g, "\n");
        }
        );

        if (data.length === 0) {
          setEmpty(true);
          return;
        }
        else {
          setEmpty(false);
        }

        console.log('API data with images:', data);
        setAllPosts(data);
        console.log('All posts:', allPosts);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  const handleNextPost = () => {
    setCurrentPost(currentPost === allPosts.length - 1 ? 0 : currentPost + 1);
  };

  const handlePreviousPost = () => {
    setCurrentPost(currentPost === 0 ? allPosts.length - 1 : currentPost - 1);
  };

  return (
    <>
      {loading ? (
        <div className="w-1/2 mx-auto text-center">
          <h1>Loading...</h1>
        </div>

      ) : (!empty ? (
        <>
          <div className="fixed bottom-0 right-0 mb-4 mr-4 flex items-center space-x-2">
            <button onClick={handlePreviousPost} className="px-2">
              &#9664; {/* Unicode arrow pointing left */}
            </button>
            <button onClick={handleNextPost} className="px-2">
              &#9654; {/* Unicode arrow pointing right */}
            </button>
          </div>

          <div className="overflow-y-hidden flex justify-center items-center">
            <div className="flex flex-row align-middle justify-center max-h-[calc(100vh-60px)] mx-auto">
              <div className="flex flex-col w-1/2 justify-center items-center overflow-hidden">
                <ImageGrid images={allPosts[currentPost].image_uids} location={allPosts[currentPost].location} />
              </div>
              <div id="divider" className="border-r-2 border-gray-100"></div>
              <div className="flex flex-col w-1/2 overflow-y-scroll">
                <Description post={{
                  title: allPosts[currentPost].title,
                  location: allPosts[currentPost].location,
                  date: allPosts[currentPost].date,
                  description: allPosts[currentPost].description,
                  tags: allPosts[currentPost].tags
                }} />
              </div>
            </div>
          </div>

        </>
      ) : (

        <div className='w-1/2 mx-auto text-center'>
          Empty
        </div>
      )

      )}

    </>
  )
}
