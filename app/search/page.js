// // read frrom the url and display it in comoonent
'use client'
// import React, { useState, useEffect } from 'react';
// import Sidebar from "@/components/Sidebar";
import lunr from 'lunr';



// export default function Search() {

//     const [loading, setLoading] = useState(true);
//     const [allPosts, setAllPosts] = useState([]);

//     useEffect(async () => {

//         async function fetchAllPosts() {
//             const url = 'http://127.0.0.1:8080/api/post/all';
        
//             // Define the request headers
//             const headers = new Headers({
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//                 // Add any other headers if needed
//             });
        
//             // Define the fetch options
//             const options = {
//                 method: 'GET',
//                 headers: headers,
//                 mode: 'cors', // Enable CORS
//             };
        
//             var allPosts = [];
//             // Make the fetch request
//             await fetch(url, options)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error(`HTTP error! Status: ${response.status}`);
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     console.log('API data:', data);
        
//                     data.forEach(post => {
//                         post.description = post.description.replace(/\\n/g, "\n");
//                     }
//                     );
        
//                     setAllPosts(data);
//                     setLoading(false);
//                 })
//                 .catch(error => {
//                     console.error('Fetch error:', error);
//                 });
//         }

//         fetchAllPosts();
//     } , []);

//     return (
//         <div>
//             <Sidebar />
//             <h1>Search</h1>
//             {loading ? <p>Loading...</p> :
//                 allPosts.map(post => (
//                     <div key={post.id}>
//                         <h2>{post.title}</h2>
//                         <p>{post.id}</p>
//                         <p>{post.description}</p>
//                         {/* break */}
//                         <br></br>
//                     </div>
//                 ))
//             }
//         </div>

//     )
// }

// No need for 'use client'
import React, { useState, useEffect } from 'react';
import Sidebar from "@/components/Sidebar";
import { filterProps } from 'framer-motion';

export default function Search() {
    const [loading, setLoading] = useState(true);
    const [allPosts, setAllPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        const fetchAllPosts = async () => {
            const url = 'http://127.0.0.1:8080/api/post/all';

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                    mode: 'cors', // Enable CORS
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                data.forEach(post => {
                    post.description = post.description.replace(/\\n/g, "\n");
                });
                
                
                setFilteredPosts(data);
                setAllPosts(data);
                filterData(data);
                setLoading(false);
            } catch (error) {
                console.error('Fetch error:', error);
                setLoading(false); // Handle loading state in case of an error
            }
        };

        const filterData = async (data) => {
            // "title": post.post_title,
            //           "author": post.fk_user_id,
            //           "date": formatted_date,
            //           "location": post.location,
            //           "tags": post.tags,
            //           "image_uids": post.images,
            //           "description": post.post_content,
            //             "id": post.post_id
            
            console.log("data");
            const idx = lunr(function () {
                this.ref('id');
                this.field('title');
                this.field('author');
                this.field('date');
                this.field('location');
                this.field('tags');
                this.field('description');

                data.forEach(post => {
                    this.add(post);
                });
            });

            console.log(idx);
            
            var t = idx.search('Tree');

            // map to the post id
            var post_ids = t.map(function (result) {
                return result.ref;
            });

            console.log(post_ids);

            var filtered = data.filter(function (post) {
                return post_ids.includes(post.id);
            }
            );

            // setFilteredPosts
            setFilteredPosts(filtered);
        }

        fetchAllPosts();
    }, []); // Empty dependency array to mimic componentDidMount

    return (
        <div>
            <Sidebar />
            <h1>Search</h1>
            {loading ? <p>Loading...</p> :
                allPosts.map(post => (
                //    check if post is in filteredPosts
                //    if it is, display it
                //    if not, don't display it
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.id}</p>
                        <p>{post.description}</p>
                        {/* break */}
                        <br></br>
                    </div>
                ))
            }
        </div>
    );
}
