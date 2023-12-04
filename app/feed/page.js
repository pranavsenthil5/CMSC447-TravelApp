'use client'
import Image from 'next/image'
import Description from './components/description'
import ImageGrid from './components/imageGrid'
import Sidebar from '../../components/Sidebar'
import React, { use } from 'react'

var images = ['/img1.png', '/img2.png', '/img3.png'];

import { useState, useEffect } from 'react';


// async function getUserInfo() {

//   var output =  
//   await fetch("/auth/user", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => {
//       console.log("RESPONSE", response);
//       return response.json();
//     }
//     )
//     .then((data) => {
//       console.log("DATA", data);
//       return data;
//     }
//     )
//     .catch((err) => {
//       console.log("ERROR");
//       console.log(err);
//     }
//     );
//     console.log("OUTPUT", output);
//     return output;

// }

async function getUserInfo() {
  try {
    const response = await fetch("/auth/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user information. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("USER INFO", data);
    return data;
  } catch (error) {
    console.error("ERROR", error.message);
    // You may choose to handle the error differently or rethrow it.
    throw error;
  }
}

export default function Post() {
  var [currentPost, setCurrentPost] = useState(0);

  const [loading, setLoading] = useState(true);
  const [postContent, setPostContent] = useState({});
  const [allPosts, setAllPosts] = useState([]);

  // useEffect(() => {
  //   // add arrow key functionality
  //   document.addEventListener('keydown', (event) => {
  //     if (event.key === 'ArrowRight') {
  //       handleNextPost();
  //     } else if (event.key === 'ArrowLeft') {
  //       handlePreviousPost();
  //     }

  //   });
  // }, []);

  useEffect(() => {
    // get the user info
    console.log("GETTING USER INFO");
    var d = getUserInfo()
    // returned a promise
    console.log("HERREee");
    // wait for the promise to resolve
    d.then((data) => {
      console.log("DATA", data);
      // set the post content
      setPostContent(data);
    }).catch((err) => {
      console.log("ERROR");
      console.log(err);
    } 
    );

  }, []);

  useEffect(() => {
    console.log("useEffect called");
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    const url = 'http://127.0.0.1:8080/api/post/all';

    // Define the request headers
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // Add any other headers if needed
    });

    // Define the fetch options
    const options = {
      method: 'GET',
      headers: headers,
      mode: 'cors', // Enable CORS
    };

    // Make the fetch request
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Handle the API response data here
        console.log('API data:', data);

        // add images to the post
        // data.forEach(post => {
        //   post.images = ['/img1.png', '/img2.png', '/img3.png'];
        // });

        // format the date
        data.forEach(post => {
          var date = new Date(post.date);
          // show the date in the format: Month Day, Year

          // set zone to EST
          date.setHours(date.getHours() - 5);
          
          post.date = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        });

        console.log('API data with images:', data);
        setAllPosts(data);
        console.log('All posts:', allPosts);
        setLoading(false);
      })
      .catch(error => {
        // Handle errors here
        console.error('Fetch error:', error);
      });
  }, []);

  const handleNextPost = () => {
    console.log("Current post: " + currentPost)
    console.log("All posts: " + allPosts)

    setCurrentPost(currentPost === allPosts.length - 1 ? 0 : currentPost + 1);

    console.log("Current post: " + currentPost)
  };

  const handlePreviousPost = () => {

    console.log("Current post: " + currentPost)
    console.log("All posts: " + allPosts)
    setCurrentPost(currentPost === 0 ? allPosts.length - 1 : currentPost - 1);

    console.log("Current post: " + currentPost)
  };

  return (
    <>
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <Sidebar />
          <div className="fixed bottom-0 right-0 mb-4 mr-4 flex items-center space-x-2">
            <button onClick={handlePreviousPost} className="px-2">
              &#9664; {/* Unicode arrow pointing left */}
            </button>
            <button onClick={handleNextPost} className="px-2">
              &#9654; {/* Unicode arrow pointing right */}
            </button>
          </div>

          <div className="w-screen overflow-y-hidden flex justify-center items-center">
            <div className="flex flex-row align-middle justify-center max-h-[calc(100vh-60px)]">
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
      )}
    </>
  )
}
