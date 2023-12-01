// import React from 'react';

// export default function AccountForm() {
//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="bg-cover bg-center w-1/2 h-screen" style={{ backgroundImage: `url('./travel.png')` }}></div>
//       <div className="w-1/2 flex flex-col items-center justify-center">
//         <div className="form">
//           <div className="form-field">
//             <p className="label">User Name:</p>
//             <input
//               type="text"
//               className="input border border-black"
//               name="user_name"
//               value=""
//             />
//           </div>
//           <div className="form-field">
//             <p className="label">First Name:</p>
//             <input
//               type="text"
//               className="input border border-black"
//               name="first_name"
//               value=""
//             />
//           </div>
//           <div className="form-field">
//             <p className="label">Last Name:</p>
//             <input
//               type="text"
//               className="input border border-black"
//               name="last_name"
//               value=""
//             />
//           </div>
//           <div className="form-field">
//             <p className="label">Password:</p>
//             <input
//               type="password"
//               className="input border border-black"
//               name="password_hash"
//               value=""
//             />
//           </div>
//           <div className="form-field">
//             <p className="label">Location:</p>
//             <input
//               type="text"
//               className="input border border-black"
//               name="location"
//               value=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }










'use client';
import React, { useState } from 'react';

export default function AccountForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    user_name: '',
    first_name: '',
    last_name: '',
    password_hash: '',
    location: '',
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send the form data to the server using a fetch or axios request
      const response = await fetch('/profile', {  // Use the correct endpoint here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Handle successful form submission, e.g., show a success message
        console.log('Account updated successfully!');
      } else {
        // Handle errors, e.g., show an error message to the user
        console.error('Failed to update account.');
      }
    } catch (error) {
      console.error('An error occurred during form submission.', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div
        className="bg-cover bg-center w-1/2 h-screen"
        style={{ backgroundImage: `url('./travel.png')` }}
      ></div>
      <div className="w-1/2 flex flex-col items-start justify-center pl-8">
        <div className="form">
          <div className="form-field mb-4">
            <label className="label" htmlFor="user_name">
              User Name:
            </label>
            <input
              type="text"
              id="user_name"
              className="input border border-black text-lg p-2"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-field mb-4">
            <label className="label" htmlFor="first_name">
              First Name:
            </label>
            <input
              type="text"
              id="first_name"
              className="input border border-black text-lg p-2"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-field mb-4">
            <label className="label" htmlFor="last_name">
              Last Name:
            </label>
            <input
              type="text"
              id="last_name"
              className="input border border-black text-lg p-2"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-field mb-4">
            <label className="label" htmlFor="password_hash">
              Password:
            </label>
            <input
              type="password"
              id="password_hash"
              className="input border border-black text-lg p-2"
              name="password_hash"
              value={formData.password_hash}
              onChange={handleChange}
            />
          </div>
          <div className="form-field mb-4">
            <label className="label" htmlFor="location">
              Location: 
            </label>
            <input
              type="text"
              id="location"
              className="input border border-black text-lg p-2"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit} className="btn bg-blue-500 text-white p-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

