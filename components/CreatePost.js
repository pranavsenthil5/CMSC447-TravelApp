// 'use client'
// import React, { useState } from 'react';

// const CreatePost = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [location, setLocation] = useState('');
//   const [image, setImage] = useState(null);

//   //date format - 2021-04-01 
//   var post_date = new Date().toISOString().slice(0, 10);
//   var tags = ["tag1", "tag2", "tag3"]

//   const handleTitleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
//     setTitle(e.target.value);
//   };

//   const handleDescriptionChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
//     setDescription(e.target.value);
//   };

//   const handleLocationChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
//     setLocation(e.target.value);
//   };

//   const handleImageUpload = (e: { target: { files: any[]; }; }) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   // const handleSubmit = async (e: { preventDefault: () => void; }) => {
//   //   e.preventDefault();


//   //   // post_title = db.Column(db.Text, nullable=False)
//   //   // post_content = db.Column(db.Text, nullable=False)
//   //   // location = db.Column(db.String(40), nullable=False)
//   //   // images = db.Column(db.ARRAY(db.Text), nullable=False)
//   //   // post_date = db.Column(db.Date, nullable=False)
//   //   // tags = db.Column(db.ARRAY(db.Text), nullable=False, default=[])

//   //   console.log('Title:', title);
//   //   console.log('Description:', description);
//   //   console.log('Location:', location);
//   //   console.log('Image:', image);
//   //   console.log('Date:', post_date);
//   //   console.log('Tags:', tags);

//   //   // save image using /file/upload

    


//   //   // Reset the form
//   //   setTitle('');
//   //   setDescription('');
//   //   setLocation('');
//   //   setImage(null);
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const body = new FormData();
//     body.append("file", image);
//     body.append("post_id", 1);
//     const response = await fetch("/file/upload", {
//       method: "POST",
//       body
//     });
 
//     console.log("JSON", response.json());

//     // Additional logic for handling post data
//     console.log('Title:', title);
//     console.log('Description:', description);
//     console.log('Location:', location);
//     console.log('Image:', image);
//     console.log('Date:', post_date);
//     console.log('Tags:', tags);

//     // Reset the form
//     setTitle('');
//     setDescription('');
//     setLocation('');
//     setImage(null);
//     setCreateObjectURL(null);
//   };

//   return (
//     <div className="w-full max-w-lg mx-auto">
//       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
//             Title
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="title"
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={handleTitleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
//             Description
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="description"
//             placeholder="Description"
//             value={description}
//             onChange={handleDescriptionChange}
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
//             Location
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="location"
//             type="text"
//             placeholder="Location"
//             value={location}
//             onChange={handleLocationChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
//             Upload Picture
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="image"
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Create Post
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;

import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  var post_date = new Date().toISOString().slice(0, 10);
  var tags = ["tag1", "tag2", "tag3"];

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setCreateObjectURL(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // replace new line characters with \n so that they are preserved in the database
    var escaped_description = description.replace(/\n/g, "\\n");

    const body = new FormData();
    body.append("file", image);
    body.append("post_id", 1);
    const response = await fetch("/file/upload", {
      method: "POST",
      body
    });

    const data = await response.json();
    console.log("DATA", data);


    // Additional logic for handling post data
    // console.log('Title:', title);
    // console.log('Description:', description);
    // console.log('Location:', location);
    // console.log('Image:', image);
    // console.log('Date:', post_date);
    // console.log('Tags:', tags);



    const obj = {
      title: title,
      author: 1,
      date: post_date,
      location: location,
      tags: tags,
      image_uids: [data.fileUrl],
      description: escaped_description
    }

    console.log("OBJ", obj);

    const url = 'http://127.0.0.1:8080/api/post/create/1';

    // Define the request headers
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // Add any other headers if needed
    });
    const response2 =  await fetch(url, {
      method: 'POST',
      headers: headers,
      mode: 'cors', // Enable CORS
      body: JSON.stringify(obj)
    });

    console.log("RESPONSE", response2);





    // Reset the form
    setTitle('');
    setDescription('');
    setLocation('');
    setImage(null);
    setCreateObjectURL(null);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Upload Picture
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {createObjectURL && <img src={createObjectURL} alt="Uploaded" />}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
