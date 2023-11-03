'use client'
// import { useCallback, useEffect, useState } from 'react';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// import axios from 'axios';

// export default function AccountForm({ session }) {
//   const supabase = createClientComponentClient();
//   const [loading, setLoading] = useState(true);
//   const [fullname, setFullname] = useState(null);
//   const [username, setUsername] = useState(null);
//   const [website, setWebsite] = useState(null);
//   const [avatar_url, setAvatarUrl] = useState(null);
//   const user = session?.user;
  
//   const [userData, setUserData] = useState({
//     user_name: "",
//     first_name: "",
//     last_name: "",
//     password_hash: "",
//     location: "",
//     email: session?.user.email, // Include email from Supabase

//   });
//   const [accountMessage, setAccountMessage] = useState(""); // State for the account creation message

//   const apiUrl = 'http://127.0.0.1:5000/account';

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const createAccount = async () => {
//     try {
//       const response = await axios.post(apiUrl, userData);

//       if (response.status === 201) {
//         setAccountMessage("Account created successfully!"); // Set the account creation message
//       } else {
//         setAccountMessage(`Error: ${response.data.error}`);
//       }
//     } catch (error) {
//       setAccountMessage(`Error: ${error}`);
//     }
//   }

//   const getProfile = useCallback(async () => {
//     try {
//       setLoading(true);

//       const { data, error, status } = await supabase
//         .from('profiles')
//         .select(`full_name, username, website, avatar_url`)
//         .eq('id', user?.id)
//         .single();

//       if (error && status !== 406) {
//         throw error;
//       }

//       if (data) {
//         setFullname(data.full_name);
//         setUsername(data.username);
//         setWebsite(data.website);
//         setAvatarUrl(data.avatar_url);
//       }
//     } catch (error) {
//       alert('Error loading user data!');
//     } finally {
//       setLoading(false);
//     }
//   }, [user, supabase]);

//   useEffect(() => {
//     getProfile();
//   }, [user, getProfile]);

//   async function updateProfile({ username, website, avatar_url }) {
//     try {
//       setLoading(true);

//       const { error } = await supabase.from('profiles').upsert({
//         id: user?.id,
//         full_name: fullname,
//         username,
//         website,
//         avatar_url,
//         updated_at: new Date().toISOString(),
//       });
//       if (error) throw error;
//       alert('Profile updated!');
//     } catch (error) {
//       alert('Error updating the data!');
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div>
//       <h1>User Login</h1>
//       <div className="form-widget">
//         <div>
//           <label htmlFor="email">Email : </label>
//           <input
//             id="email"
//             type="text"
//             value={session?.user.email}
//             style={{ display: 'inline-block', width: '50%' }}
//             disabled
//           />
//         </div>


//       {/* Your Account Creation Form */}
//       <form>
//         <div className="mb-3">
//           <label>User Name: </label>
//           <input
//             type="text"
//             className="form-control"
//             name="user_name"
//             value={userData.user_name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label>First Name: </label>
//           <input
//             type="text"
//             className="form-control"
//             name="first_name"
//             value={userData.first_name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label>Last Name: </label>
//           <input
//             type="text"
//             className="form-control"
//             name="last_name"
//             value={userData.last_name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password: </label>
//           <input
//             type="password"
//             className="form-control"
//             name="password_hash"
//             value={userData.password_hash}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label>Location: </label>
//           <input
//             type="text"
//             className="form-control"
//             name="location"
//             value={userData.location}
//             onChange={handleChange}
//           />
//         </div>
//         {accountMessage && <p>{accountMessage}</p>} {/* Display the account creation message */}
//         <button type="button" onClick={createAccount} className="btn btn-primary">
//           Create Account
//         </button>
//       </form>
//       <div>
//           <form action="/auth/signout" method="post">
//             <button className="button block" type="submit">
//               Sign out
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }







// 'use client'
// import { useCallback, useEffect, useState } from 'react';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Form } from 'react-bootstrap';

// import './Frame6UserLoginEditUser.module.css'; // Import the CSS file for styling

// export default function AccountForm({ session }) {
//   const supabase = createClientComponentClient();
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null); // Instead of 'user?.id', use 'user'
//   const [userData, setUserData] = useState({
//     user_name: '',
//     first_name: '',
//     last_name: '',
//     password_hash: '',
//     location: '',
//     email: user ? user.email : '', // Include email from Supabase
//   });
//   const [accountMessage, setAccountMessage] = useState('');

//   const apiUrl = 'http://127.0.0.1:5000/account';

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const createAccount = async () => {
//     try {
//       const response = await axios.post(apiUrl, userData);

//       if (response.status === 201) {
//         setAccountMessage('Account created successfully!');
//       } else {
//         setAccountMessage(`Error: ${response.data.error}`);
//       }
//     } catch (error) {
//       setAccountMessage(`Error: ${error}`);
//     }
//   };

//   const getProfile = useCallback(async () => {
//     try {
//       setLoading(true);

//       const { data, error, status } = await supabase
//         .from('profiles')
//         .select(`full_name, username, website, avatar_url`)
//         .eq('id', user.id) // Use 'user.id' instead of 'user?.id'
//         .single();

//       if (error && status !== 406) {
//         throw error;
//       }

//       if (data) {
//         // Set your state variables as needed
//         setUserData((prevData) => ({
//           ...prevData,
//           user_name: data.username,
//           first_name: data.first_name,
//           last_name: data.last_name,
//           location: data.location,
//         }));
//       }
//     } catch (error) {
//       alert('Error loading user data!');
//     } finally {
//       setLoading(false);
//     }
//   }, [user, supabase]);

//   useEffect(() => {
//     getProfile();
//   }, [user, getProfile]);

//   async function updateProfile({ username, website, avatar_url }) {
//     try {
//       setLoading(true);

//       const { error } = await supabase.from('profiles').upsert({
//         id: user.id, // Use 'user.id'
//         full_name: `${userData.first_name} ${userData.last_name}`,
//         username,
//         website,
//         avatar_url,
//         updated_at: new Date().toISOString(),
//       });
//       if (error) throw error;
//       alert('Profile updated!');
//     } catch (error) {
//       alert('Error updating the data!');
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="frame6UserLogineditUser">
//       <img
//         className="frame6UserLogineditUserChild"
//         alt=""
//         src="/ellipse-3@2x.png"
//       />
//       <div className="drift">Drift</div>
//       <div className="uploadPicture">Upload Picture:</div>
//       <div className="editProfile">Edit Profile</div>
//       <Button
//         className="frame6UserLogineditUserItem"
//         variant="outline-primary"
//       >
//         Update
//       </Button>
//       <Button
//         className="frame6UserLogineditUserInner"
//         variant="outline-primary"
//       >
//         Sign Out
//       </Button>
//       <div className="rectangleDiv" />
//       <div className="userNameFirstContainer">
//         <span className="userNameFirstContainer1">
//           <p className="userName">User Name:</p>
//           <p className="userName">First Name:</p>
//           <p className="userName">Last Name:</p>
//           <p className="userName">Password:</p>
//           <p className="userName">Location:</p>
//         </span>
//       </div>
//       <Form className="wrapper">
//         <Form.Control
//           type="text"
//           name="user_name"
//           value={userData.user_name}
//           onChange={handleChange}
//         />
//         <Form.Control
//           type="text"
//           name="first_name"
//           value={userData.first_name}
//           onChange={handleChange}
//         />
//         <Form.Control
//           type="text"
//           name="last_name"
//           value={userData.last_name}
//           onChange={handleChange}
//         />
//         <Form.Control
//           type="password"
//           name="password_hash"
//           value={userData.password_hash}
//           onChange={handleChange}
//         />
//         <Form.Control
//           type="text"
//           name="location"
//           value={userData.location}
//           onChange={handleChange}
//         />
//       </Form>
//     </div>
//   );
// }



// import { useEffect, useState } from 'react';
// import { Form } from "react-bootstrap";
// import axios from 'axios';
// import styles from "./Frame6UserLoginEditUser.module.css";

// export default function AccountForm({ session }) {
//   const [loading, setLoading] = useState(true);
//   const [accountMessage, setAccountMessage] = useState("");
//   const apiUrl = 'http://127.0.0.1:5000/account';

//   // Declare userData in state
//   const [userData, setUserData] = useState({
//     user_name: "",
//     first_name: "",
//     last_name: "",
//     password_hash: "",
//     location: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     // Update userData with the new value
//     setUserData({ ...userData, [name]: value });
//   };

//   const createAccount = async () => {
//     try {
//       const response = await axios.post(apiUrl, userData);

//       if (response.status === 201) {
//         setAccountMessage("Account created successfully!");
//       } else {
//         setAccountMessage(`Error: ${response.data.error}`);
//       }
//     } catch (error) {
//       setAccountMessage(`Error: ${error}`);
//     }
//   }

//   useEffect(() => {
//     // Your getProfile and updateProfile functions remain the same
//   }, [session]);

//   return (
//     <div className={styles.frame6UserLoginEditUser}>
//       <img
//         className={styles.frame6UserLogineditUserChild}
//         alt=""
//         src="/ellipse-3@2x.png"









// import { useEffect, useState } from 'react';
// import { Form } from "react-bootstrap";
// import axios from 'axios';
// import styles from "./Frame6UserLoginEditUser.module.css";

// // Import the background image and the ellipse image
// import backgroundImage from './travel.png'; // Make sure to place the background image in the same folder as your account-form.jsx
// import ellipseImage from './ellipse-3@2x.png'; // Make sure to place the ellipse image in the same folder as your account-form.jsx

// export default function AccountForm({ session }) {
//   const [loading, setLoading] = useState(true);
//   const [accountMessage, setAccountMessage] = useState("");
//   const apiUrl = 'http://127.0.0.1:5000/account';

//   const [userData, setUserData] = useState({
//     user_name: "",
//     first_name: "",
//     last_name: "",
//     password_hash: "",
//     location: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const createAccount = async () => {
//     try {
//       const response = await axios.post(apiUrl, userData);

//       if (response.status === 201) {
//         setAccountMessage("Account created successfully!");
//       } else {
//         setAccountMessage(`Error: ${response.data.error}`);
//       }
//     } catch (error) {
//       setAccountMessage(`Error: ${error}`);
//     }
//   }

//   useEffect(() => {
//     // Your getProfile and updateProfile functions remain the same
//   }, [session]);

//   return (
//     <div
//       className={styles.frame6UserLoginEditUser}
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <img
//         className={styles.frame6UserLogineditUserChild}
//         src={ellipseImage}
//         alt="Ellipse"
//       />
//       <div className={styles.drift}>Drift</div>
//       <button className={styles.uploadPicture}>Upload Picture:</button>
//       <div className={styles.editProfile}>Edit Profile</div>
//       <button className={styles.frame6UserLogineditUserItem} />
//       <button className={styles.frame6UserLogineditUserInner} />
//       <div className={styles.update}>Update</div>
//       <div className={styles.signOut}>Sign Out</div>
//       <div className={styles.rectangleDiv} />
//       <div className={styles.userNameFirstContainer}>
//         <span className={styles.userNameFirstContainer1}>
//           <p className={styles.userName}>User Name:</p>
//           <p className={styles.userName}>First Name:</p>
//           <p className={styles.userName}>Last Name:</p>
//           <p className={styles.userName}>Password:</p>
//           <p className={styles.userName}>Location:</p>
//         </span>
//       </div>
//       <Form className={styles.inputBg}>
//         <Form.Control
//           type="text"
//           name="user_name"
//           value={userData.user_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg1}>
//         <Form.Control
//           type="text"
//           name="first_name"
//           value={userData.first_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg2}>
//         <Form.Control
//           type="text"
//           name="last_name"
//           value={userData.last_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg3}>
//         <Form.Control
//           type="password"
//           name="password_hash"
//           value={userData.password_hash}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg4}>
//         <Form.Control
//           type="text"
//           name="location"
//           value={userData.location}
//           onChange={handleChange}
//         />
//       </Form>
//       {accountMessage && <p>{accountMessage}</p>}
//       <button type="button" onClick={createAccount} className="btn btn-primary">
//         Create Account
//       </button>
//     </div>
//   );
// }

// import { useEffect, useState } from 'react';
// import { Form } from "react-bootstrap";
// import axios from 'axios';
// import styles from "./Frame6UserLoginEditUser.module.css";

// export default function AccountForm({ session }) {
//   const [loading, setLoading] = useState(true);
//   const [accountMessage, setAccountMessage] = useState("");
//   const apiUrl = 'http://127.0.0.1:5000/account';

//   const handleChange = (event) => {
//     // Your handleChange function remains the same
//   };

//   const createAccount = async () => {
//     // Your createAccount function remains the same
//   };

//   useEffect(() => {
//     // Your getProfile and updateProfile functions remain the same
//   }, [session]);

//   return (
//     <div className={styles.frame6UserLoginEditUser}>
//       <img
//         className={styles.frame6UserLogineditUserChild}
//         alt=""
//         src="/ellipse-3@2x.png"
//       />
//       <div className={styles.drift}>Drift</div>
//       <button className={styles.uploadPicture}>Upload Picture:</button>
//       <div className={styles.editProfile}>Edit Profile</div>
//       <button className={styles.frame6UserLogineditUserItem} />
//       <button className={styles.frame6UserLogineditUserInner} />
//       <div className={styles.update}>Update</div>
//       <div className={styles.signOut}>Sign Out</div>
//       <div className={styles.rectangleDiv} />
//       <div className={styles.userNameFirstContainer}>
//         <span className={styles.userNameFirstContainer1}>
//           <p className={styles.userName}>User Name:</p>
//           <p className={styles.userName}>First Name:</p>
//           <p className={styles.userName}>Last Name:</p>
//           <p className={styles.userName}>Password:</p>
//           <p className={styles.userName}>Location:</p>
//         </span>
//       </div>
//       <Form className={styles.inputBg}>
//         <Form.Control
//           type="text"
//           name="user_name"
//           value={userData.user_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg1}>
//         <Form.Control
//           type="text"
//           name="first_name"
//           value={userData.first_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg2}>
//         <Form.Control
//           type="text"
//           name="last_name"
//           value={userData.last_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg3}>
//         <Form.Control
//           type="password"
//           name="password_hash"
//           value={userData.password_hash}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg4}>
//         <Form.Control
//           type="text"
//           name="location"
//           value={userData.location}
//           onChange={handleChange}
//         />
//       </Form>
//       {accountMessage && <p>{accountMessage}</p>}
//       <button type="button" onClick={createAccount} className="btn btn-primary">
//         Create Account
//       </button>
//     </div>
//   );
// }




// import { useEffect, useState } from 'react';
// import { Form } from 'react-bootstrap';
// import axios from 'axios';
// import styles from './Frame6UserLoginEditUser.module.css';

// // Import the background image and the ellipse image
// import backgroundImage from './travel.png'; // Make sure to place the background image in the same folder as your account-form.jsx
// import ellipseImage from './ellipse-3@2x.png'; // Make sure to place the ellipse image in the same folder as your account-form.jsx

// export default function AccountForm({ session }) {
//   const apiUrl = 'http://127.0.0.1:5000/account';

//   const [userData, setUserData] = useState({
//     user_name: '',
//     first_name: '',
//     last_name: '',
//     password_hash: '',
//     location: '',
//   });

//   const [accountMessage, setAccountMessage] = useState(''); // State for the account creation message

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const createAccount = async () => {
//     try {
//       const response = await axios.post(apiUrl, userData);

//       if (response.status === 201) {
//         setAccountMessage('Account created successfully!'); // Set the account creation message
//       } else {
//         setAccountMessage(`Error: ${response.data.error}`);
//       }
//     } catch (error) {
//       setAccountMessage(`Error: ${error}`);
//     }
//   };

//   return (
//     <div
//       className={styles.frame6UserLoginEditUser}
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <img
//         className={styles.frame6UserLogineditUserChild}
//         src={ellipseImage}
//         alt="Ellipse"
//       />
//       <div className={styles.drift}>Drift</div>
//       <div className={styles.editProfile}>Edit Profile</div>
//       <div className={styles.update}>
//         <button onClick={createAccount} className="btn btn-primary">
//           Create Account
//         </button>
//       </div>
//       <div className={styles.signOut}>
//         <form action="/auth/signout" method="post">
//           <button className="btn btn-danger" type="submit">
//             Sign Out
//           </button>
//         </form>
//       </div>
//       <div className={styles.rectangleDiv} />
//       <div className={styles.userNameFirstContainer}>
//         <span className={styles.userNameFirstContainer1}>
//           <p className={styles.userName}>User Name:</p>
//           <p className={styles.userName}>First Name:</p>
//           <p className={styles.userName}>Last Name:</p>
//           <p className={styles.userName}>Password:</p>
//           <p className={styles.userName}>Location:</p>
//         </span>
//       </div>
//       <Form className={styles.inputBg4}>
//         <Form.Control
//           type="text"
//           name="user_name"
//           value={userData.user_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg3}>
//         <Form.Control
//           type="text"
//           name="first_name"
//           value={userData.first_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg}>
//         <Form.Control
//           type="text"
//           name="last_name"
//           value={userData.last_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg1}>
//         <Form.Control
//           type="password"
//           name="password_hash"
//           value={userData.password_hash}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg2}>
//         <Form.Control
//           type="text"
//           name="location"
//           value={userData.location}
//           onChange={handleChange}
//         />
//       </Form>
//       {accountMessage && <p>{accountMessage}</p>} {/* Display the account creation message */}
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import styles from './Frame6UserLoginEditUser.module.css';
import backgroundImage from './travel.png';
import ellipseImage from './ellipse-3@2x.png';
import Avatar from './avatar'; // Import the Avatar component

export default function AccountForm({ session }) {
  const [loading, setLoading] = useState(true);
  const [accountMessage, setAccountMessage] = useState('');
  const apiUrl = 'http://127.0.0.1:5000/account';

  const [userData, setUserData] = useState({
    user_name: '',
    first_name: '',
    last_name: '',
    password_hash: '',
    location: '',
    avatar_url: '', // Add avatar_url to the userData state
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const updateProfile = async () => {
    try {
      const response = await axios.post(apiUrl, userData);

      if (response.status === 201) {
        setAccountMessage('Account updated successfully!');
      } else {
        setAccountMessage(`Error: ${response.data.error}`);
      }
    } catch (error) {
      setAccountMessage(`Error: ${error}`);
    }
  };

  useEffect(() => {
    // Your getProfile and updateProfile functions remain the same
  }, [session]);

  const handleSignOut = () => {
    window.location.href = 'http://localhost:3000';
  };

  const handleAvatarUpload = (url) => {
    setUserData({ ...userData, avatar_url: url });
  };

  return (
    <div className={styles.frame6UserLoginEditUser} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <img
        className={styles.frame6UserLogineditUserChild}
        src={ellipseImage}
        alt="Ellipse"
      />
      <div className={styles.drift}>Drift</div>

      {/* Use a label to style the "Upload Picture" button and associate it with the file input */}
      <label htmlFor="avatarInput" className={styles.uploadPicture}>

        <input
          type="file"
          id="avatarInput"
          accept="image/*"
          onChange={(e) => handleAvatarUpload(e.target.value)}
          style={{ display: 'none' }}
        />
      </label>

      {/* Add the Avatar component here */}
      <Avatar
        uid={userData.user_name} // Use a unique identifier, e.g., user_name
        url={userData.avatar_url}
        size={150}
        onUpload={handleAvatarUpload}
      />

      <div className={styles.editProfile}>Edit Profile</div>
      <button className={styles.frame6UserLogineditUserItem} onClick={updateProfile}>
        Update
      </button>
      <div className={styles.signOutBox}>
        <button className={styles.frame6UserLogineditUserInner}>
          <div className={styles.update}></div>
          <div>
            <form action="/auth/signout" method="post">
              <button className={styles.signOutButton}>Sign out</button>
            </form>
          </div>
        </button>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.userNameFirstContainer}>
        <span className={styles.userNameFirstContainer1}>
          <p className={styles.userName}>User Name:</p>
          <p className={styles.userName}>First Name:</p>
          <p className={styles.userName}>Last Name:</p>
          <p className={styles.userName}>Password:</p>
          <p className={styles.userName}>Location:</p>
        </span>
      </div>
      <Form className={styles.inputBg4}>
        <Form.Control
          type="text"
          name="user_name"
          value={userData.user_name}
          onChange={handleChange}
        />
      </Form>
      <Form className={styles.inputBg3}>
        <Form.Control
          type="text"
          name="first_name"
          value={userData.first_name}
          onChange={handleChange}
        />
      </Form>
      <Form className={styles.inputBg}>
        <Form.Control
          type="text"
          name="last_name"
          value={userData.last_name}
          onChange={handleChange}
        />
      </Form>
      <Form className={styles.inputBg1}>
        <Form.Control
          type="password"
          name="password_hash"
          value={userData.password_hash}
          onChange={handleChange}
        />
      </Form>
      <Form className={styles.inputBg2}>
        <Form.Control
          type="text"
          name="location"
          value={userData.location}
          onChange={handleChange}
        />
      </Form>
      {accountMessage && <p>{accountMessage}</p>}
      </div>
);
}




// // Import necessary dependencies
// import { useEffect, useState } from 'react';
// import { Form } from 'react-bootstrap';
// import axios from 'axios';
// import styles from './Frame6UserLoginEditUser.module.css';
// import Avatar from './Avatar'; // Import the Avatar component

// // Import the background image and the ellipse image
// import backgroundImage from './travel.png';
// import ellipseImage from './ellipse-3@2x.png';

// export default function AccountForm({ session }) {
//   const [loading, setLoading] = useState(true);
//   const [accountMessage, setAccountMessage] = useState('');
//   const apiUrl = 'http://127.0.0.1:5000/account';

//   const [userData, setUserData] = useState({
//     user_name: '',
//     first_name: '',
//     last_name: '',
//     password_hash: '',
//     location: '',
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const updateProfile = async () => {
//     try {
//       const response = await axios.post(apiUrl, userData);

//       if (response.status === 201) {
//         setAccountMessage('Account created successfully!');
//       } else {
//         setAccountMessage(`Error: ${response.data.error}`);
//       }
//     } catch (error) {
//       setAccountMessage(`Error: ${error}`);
//     }
//   }

//   useEffect(() => {
//     // Your getProfile and updateProfile functions remain the same
//   }, [session]);

//   const handleSignOut = () => {
//     // Redirect to the original site (localhost:3000)
//     window.location.href = 'http://localhost:3000';
//   }

//   return (
//     <div className={styles.frame6UserLoginEditUser} style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <img
//         className={styles.frame6UserLogineditUserChild}
//         src={ellipseImage}
//         alt="Ellipse"
//       />
//       <div className={styles.drift}>Drift</div>
//       <button className={styles.uploadPicture}>Upload Picture:</button>
//       <div className={styles.editProfile}>Edit Profile</div>
//       <Avatar // Add the Avatar component
//         uid={userData.user_name} // You might want to use an appropriate identifier for the user
//         url={userData.avatar_url} // Pass the user's avatar URL
//         size={150} // Set the desired size
//         onUpload={(url) => {
//           // Handle the uploaded avatar URL here
//           setUserData({ ...userData, avatar_url: url });
//         }}
//       />
//       <div className={styles.frame6UserLogineditUserItem} onClick={updateProfile}>
//         Update
//       </div>
//       <div className={styles.signOutBox}> {/* Red box */}
//         <div className={styles.frame6UserLogineditUserInner}>
//           <div className={styles.update}></div>
//           <div>
//             <form action="/auth/signout" method="post">
//               <button className={styles.signOutButton}>Sign out</button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className={styles.rectangleDiv} />
//       <div className={styles.userNameFirstContainer}>
//         <div className="row">
//           <div className="col-md-6">
//             <Form.Label className={styles.userName}>User Name:</Form.Label>
//           </div>
//           <div className="col-md-6">
//             <Form className={styles.inputBg4}>
//               <Form.Control type="text" name="user_name" value={userData.user_name} onChange={handleChange} />
//             </Form>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-6">
//             <Form.Label className={styles.userName}>First Name:</Form.Label>
//           </div>
//           <div className="col-md-6">
//             <Form className={styles.inputBg3}>
//               <Form.Control type="text" name="first_name" value={userData.first_name} onChange={handleChange} />
//             </Form>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-6">
//             <Form.Label className={styles.userName}>Last Name:</Form.Label>
//           </div>
//           <div className="col-md-6">
//             <Form className={styles.inputBg}>
//               <Form.Control type="text" name="last_name" value={userData.last_name} onChange={handleChange} />
//             </Form>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-6">
//             <Form.Label className={styles.userName}>Password:</Form.Label>
//           </div>
//           <div className="col-md-6">
//             <Form className={styles.inputBg1}>
//               <Form.Control type="password" name="password_hash" value={userData.password_hash} onChange={handleChange} />
//             </Form>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-6">
//             <Form.Label className={styles.userName}>Location:</Form.Label>
//           </div>
//           <div className="col-md-6">
//             <Form className={styles.inputBg2}>
//               <Form.Control type="text" name="location" value={userData.location} onChange={handleChange} />
//             </Form>
//           </div>
//         </div>
//       </div>
//       {accountMessage && <p>{accountMessage}</p>}
//     </div>
//   );
// }


// import { useEffect, useState } from 'react';
// import { Form } from "react-bootstrap";
// import axios from 'axios';
// import styles from "./Frame6UserLoginEditUser.module.css";

// // Import the background image and the ellipse image
// import backgroundImage from './travel.png'; // Make sure to place the background image in the same folder as your account-form.jsx
// import ellipseImage from './ellipse-3@2x.png'; // Make sure to place the ellipse image in the same folder as your account-form.jsx

// export default function AccountForm({ session }) {
//   const [loading, setLoading] = useState(true);
//   const [accountMessage, setAccountMessage] = useState("");
//   const apiUrl = 'http://127.0.0.1:5000/account';

//   const [userData, setUserData] = useState({
//     user_name: "",
//     first_name: "",
//     last_name: "",
//     password_hash: "",
//     location: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const updateProfile = async () => {
//     try {
//       const response = await axios.post(apiUrl, userData);

//       if (response.status === 201) {
//         setAccountMessage("Account created successfully!");
//       } else {
//         setAccountMessage(`Error: ${response.data.error}`);
//       }
//     } catch (error) {
//       setAccountMessage(`Error: ${error}`);
//     }
//   }

//   useEffect(() => {
//     // Your getProfile and updateProfile functions remain the same
//   }, [session]);

//   const handleSignOut = () => {
//     // Redirect to the original site (localhost:3000)
//     window.location.href = 'http://localhost:3000';
//   }

//   return (
//     <div
//       className={styles.frame6UserLoginEditUser}
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <img
//         className={styles.frame6UserLogineditUserChild}
//         src={ellipseImage}
//         alt="Ellipse"
//       />
//       <div className={styles.drift}>Drift</div>
//       <button className={styles.uploadPicture}>Upload Picture:</button>
//       <div className={styles.editProfile}>Edit Profile</div>
//       <button className={styles.frame6UserLogineditUserItem} onClick={updateProfile}>
//         Update
//       </button>
//       <div className={styles.signOutBox}> {/* Red box */}
//   <button className={styles.frame6UserLogineditUserInner}>
//     <div className={styles.update}></div>
//     <div>
//       <form action="/auth/signout" method="post">
//         <button className={styles.signOutButton}>Sign out</button>
//       </form>
//     </div>
//   </button>
// </div>

//       <div className={styles.rectangleDiv} />
//       <div className={styles.userNameFirstContainer}>
//         <span className={styles.userNameFirstContainer1}>
//           <p className={styles.userName}>                 User Name:</p>
//           <p className={styles.userName}>                 First Name:</p>
//           <p className={styles.userName}>Last Name:</p>
//           <p className={styles.userName}>Password:</p>
//           <p className={styles.userName}>Location:</p>
//         </span>
//       </div>
// {/* <div className={styles.userNameFirstContainer} style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
//   <p className={styles.userName}>User Name:</p>
//   <p className={styles.userName}>First Name:</p>
//   <p className={styles.userName}>Last Name:</p>
//   <p className={styles.userName}>Password:</p>
//   <p className={styles.userName}>Location:</p>
// </div> */}


//       <Form className={styles.inputBg4}>
//         <Form.Control
//           type="text"
//           name="user_name"
//           value={userData.user_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg3}>
//         <Form.Control
//           type="text"
//           name="first_name"
//           value={userData.first_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg}>
//         <Form.Control
//           type="text"
//           name="last_name"
//           value={userData.last_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg1}>
//         <Form.Control
//           type="password"
//           name="password_hash"
//           value={userData.password_hash}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg2}>
//         <Form.Control
//           type="text"
//           name="location"
//           value={userData.location}
//           onChange={handleChange}
//         />
//       </Form>
//       {accountMessage && <p>{accountMessage}</p>}
//     </div>
//   );
// }

// import { useEffect, useState } from 'react';
// import { Form } from "react-bootstrap";
// import axios from 'axios';
// import styles from "./Frame6UserLoginEditUser.module.css";

// // Import the background image and the ellipse image
// import backgroundImage from './travel.png'; // Make sure to place the background image in the same folder as your account-form.jsx
// import ellipseImage from './ellipse-3@2x.png'; // Make sure to place the ellipse image in the same folder as your account-form.jsx

// export default function AccountForm({ session }) {
//   const [loading, setLoading] = useState(true);
//   const [accountMessage, setAccountMessage] = useState("");
//   const apiUrl = 'http://127.0.0.1:5000/account';

//   const [userData, setUserData] = useState({
//     user_name: "",
//     first_name: "",
//     last_name: "",
//     password_hash: "",
//     location: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const updateProfile = async () => {
//     try {
//       const response = await axios.post(apiUrl, userData);

//       if (response.status === 201) {
//         setAccountMessage("Account created successfully!");
//       } else {
//         setAccountMessage(`Error: ${response.data.error}`);
//       }
//     } catch (error) {
//       setAccountMessage(`Error: ${error}`);
//     }
//   }

//   useEffect(() => {
//     // Your getProfile and updateProfile functions remain the same
//   }, [session]);

//   const handleSignOut = () => {
//     // Redirect to the original site (localhost:3000)
//     window.location.href = 'http://localhost:3000';
    
//   }

//   return (
//     <div
//       className={styles.frame6UserLoginEditUser}
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <img
//         className={styles.frame6UserLogineditUserChild}
//         src={ellipseImage}
//         alt="Ellipse"
//       />
//       <div className={styles.drift}>Drift</div>
//       <button className={styles.uploadPicture}>Upload Picture:</button>
//       <div className={styles.editProfile}>Edit Profile</div>
//       <button className={styles.frame6UserLogineditUserItem} onClick={updateProfile}>
//         Update
//       </button>
//       <button className={styles.frame6UserLogineditUserInner} />
//       <div className={styles.update}></div>
//       <div>
//   <form action="/auth/signout" method="post">
//     <button className="button block" type="submit">
//       Sign out
//     </button>
//   </form>
// </div>

//       <div className={styles.rectangleDiv} />
//       <div className={styles.userNameFirstContainer}>
//         <span className={styles.userNameFirstContainer1}>
//           <p className={styles.userName}>User Name:</p>
//           <p className={styles.userName}>First Name:</p>
//           <p className={styles.userName}>Last Name:</p>
//           <p className={styles.userName}>Password:</p>
//           <p className={styles.userName}>Location:</p>
//         </span>
//       </div>
//       <Form className={styles.inputBg4}>
//         <Form.Control
//           type="text"
//           name="user_name"
//           value={userData.user_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg3}>
//         <Form.Control
//           type="text"
//           name="first_name"
//           value={userData.first_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg}>
//         <Form.Control
//           type="text"
//           name="last_name"
//           value={userData.last_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg1}>
//         <Form.Control
//           type="password"
//           name="password_hash"
//           value={userData.password_hash}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg2}>
//         <Form.Control
//           type="text"
//           name="location"
//           value={userData.location}
//           onChange={handleChange}
//         />
//       </Form>
//       {accountMessage && <p>{accountMessage}</p>}
//     </div>
//   );
// }


// import { useEffect, useState } from 'react';
// import { Form } from "react-bootstrap";
// import axios from 'axios';
// import styles from "./Frame6UserLoginEditUser.module.css";

// // Import the background image and the ellipse image
// import backgroundImage from './travel.png'; // Make sure to place the background image in the same folder as your account-form.jsx
// import ellipseImage from './ellipse-3@2x.png'; // Make sure to place the ellipse image in the same folder as your account-form.jsx

// export default function AccountForm({ session }) {
//   const [loading, setLoading] = useState(true);
//   const [accountMessage, setAccountMessage] = useState("");
//   const apiUrl = 'http://127.0.0.1:5000/account';

//   const [userData, setUserData] = useState({
//     username: "figma2",
//     first_name: "password123",
//     last_name: "maryland2",
//     password_hash: "figma22",
//     location: "syedfigma2",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const updateProfile = async () => {
//     try {
//       const response = await axios.post(apiUrl, userData);

//       if (response.status === 201) {
//         setAccountMessage("Account created successfully!");
//       } else {
//         setAccountMessage(`Error: ${response.data.error}`);
//       }
//     } catch (error) {
//       setAccountMessage(`Error: ${error}`);
//     }
//   }

//   useEffect(() => {
//     // Your getProfile and updateProfile functions remain the same
//   }, [session]);

//   return (
//     <div
//       className={styles.frame6UserLoginEditUser}
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <img
//         className={styles.frame6UserLogineditUserChild}
//         src={ellipseImage}
//         alt="Ellipse"
//       />
//       <div className={styles.drift}>Drift</div>
//       <div className={styles.editProfile}>Edit Profile</div>
//       <div className={styles.update}>Update</div>
//       <div className={styles.signOut}>Sign Out</div>
//       <div className={styles.rectangleDiv} />
//       <div className={styles.userNameFirstContainer}>
//         <span className={styles.userNameFirstContainer1}>
//           <p className={styles.userName}>Username:</p>
//           <p className={styles.userName}>First Name:</p>
//           <p className={styles.userName}>Last Name:</p>
//           <p className={styles.userName}>Password Hash:</p>
//           <p className={styles.userName}>Location:</p>
//         </span>
//       </div>
//       <Form className={styles.inputBg}>
//         <Form.Control
//           type="text"
//           name="username"
//           value={userData.username}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg1}>
//         <Form.Control
//           type="text"
//           name="first_name"
//           value={userData.first_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg2}>
//         <Form.Control
//           type="text"
//           name="last_name"
//           value={userData.last_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg3}>
//         <Form.Control
//           type="password"
//           name="password_hash"
//           value={userData.password_hash}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg4}>
//         <Form.Control
//           type="text"
//           name="location"
//           value={userData.location}
//           onChange={handleChange}
//         />
//       </Form>
//       {accountMessage && <p>{accountMessage}</p>}
//     </div>
//   );
// }


// import { useEffect, useState } from 'react';
// import { Form } from "react-bootstrap";
// import axios from 'axios';
// import styles from "./Frame6UserLoginEditUser.module.css";

// // Import the background image and the ellipse image
// import backgroundImage from './travel.png'; // Make sure to place the background image in the same folder as your account-form.jsx
// import ellipseImage from './ellipse-3@2x.png'; // Make sure to place the ellipse image in the same folder as your account-form.jsx

// export default function AccountForm({ session }) {
//   const [loading, setLoading] = useState(true);
//   const [accountMessage, setAccountMessage] = useState("");
//   const apiUrl = 'http://127.0.0.1:5000/account';

//   const [userData, setUserData] = useState({
//     user_name: "figma2", // Set default values according to your specified order
//     first_name: "password123",
//     last_name: "maryland2",
//     password_hash: "figma22",
//     location: "syedfigma2",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const updateProfile = async () => {
//     try {
//       const response = await axios.post(apiUrl, userData);

//       if (response.status === 201) {
//         setAccountMessage("Account created successfully!");
//       } else {
//         setAccountMessage(`Error: ${response.data.error}`);
//       }
//     } catch (error) {
//       setAccountMessage(`Error: ${error}`);
//     }
//   }

//   useEffect(() => {
//     // Your getProfile and updateProfile functions remain the same
//   }, [session]);

//   return (
//     <div
//       className={styles.frame6UserLoginEditUser}
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <img
//         className={styles.frame6UserLogineditUserChild}
//         src={ellipseImage}
//         alt="Ellipse"
//       />
//       <div className={styles.drift}>Drift</div>
//       <div className={styles.editProfile}>Edit Profile</div>
//       <div className={styles.update}>Update</div>
//       <div className={styles.signOut}>Sign Out</div>
//       <div className={styles.rectangleDiv} />
//       <div className={styles.userNameFirstContainer}>
//         <span className={styles.userNameFirstContainer1}>
//           <p className={styles.userName}>User ID:</p>
//           <p className={styles.userName}>Username:</p>
//           <p className={styles.userName}>First Name:</p>
//           <p className={styles.userName}>Last Name:</p>
//           <p className={styles.userName}>Password Hash:</p>
//           <p className={styles.userName}>Location:</p>
//         </span>
//       </div>
//       <Form className={styles.inputBg}>
//         <Form.Control
//           type="text"
//           name="user_name"
//           value={userData.user_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg1}>
//         <Form.Control
//           type="text"
//           name="first_name"
//           value={userData.first_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg2}>
//         <Form.Control
//           type="text"
//           name="last_name"
//           value={userData.last_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg3}>
//         <Form.Control
//           type="password"
//           name="password_hash"
//           value={userData.password_hash}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg4}>
//         <Form.Control
//           type="text"
//           name="location"
//           value={userData.location}
//           onChange={handleChange}
//         />
//       </Form>
//       {accountMessage && <p>{accountMessage}</p>}
//     </div>
//   );
// }



// import { useEffect, useState } from 'react';
// import { Form } from "react-bootstrap";
// import axios from 'axios';
// import styles from "./Frame6UserLoginEditUser.module.css";

// // Import the background image and the ellipse image
// import backgroundImage from './travel.png'; // Make sure to place the background image in the same folder as your account-form.jsx
// import ellipseImage from './ellipse-3@2x.png'; // Make sure to place the ellipse image in the same folder as your account-form.jsx

// export default function AccountForm({ session }) {
//   const [loading, setLoading] = useState(true);
//   const [accountMessage, setAccountMessage] = useState("");
//   const apiUrl = 'http://127.0.0.1:5000/account';

//   const [userData, setUserData] = useState({
//     user_name: "",
//     first_name: "",
//     last_name: "",
//     password_hash: "",
//     location: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const updateProfile = async () => {
//     try {
//       const response = await axios.post(apiUrl, userData);

//       if (response.status === 201) {
//         setAccountMessage("Account created successfully!");
//       } else {
//         setAccountMessage(`Error: ${response.data.error}`);
//       }
//     } catch (error) {
//       setAccountMessage(`Error: ${error}`);
//     }
//   }

//   useEffect(() => {
//     // Your getProfile and updateProfile functions remain the same
//   }, [session]);

//   return (
//     <div
//       className={styles.frame6UserLoginEditUser}
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <img
//         className={styles.frame6UserLogineditUserChild}
//         src={ellipseImage}
//         alt="Ellipse"
//       />
//       <div className={styles.drift}>Drift</div>
//       <button className={styles.uploadPicture}>Upload Picture:</button>
//       <div className={styles.editProfile}>Edit Profile</div>
//       <button className={styles.frame6UserLogineditUserItem} onClick={updateProfile}>
//         Update
//       </button>
//       <button className={styles.frame6UserLogineditUserInner} />
//       <div className={styles.update}></div>
//       <div className={styles.signOut}>Sign Out</div>
//       <div className={styles.rectangleDiv} />
//       <div className={styles.userNameFirstContainer}>
//         <span className={styles.userNameFirstContainer1}>
//           <p className={styles.userName}>User Name:</p>
//           <p className={styles.userName}>First Name:</p>
//           <p className={styles.userName}>Last Name:</p>
//           <p className={styles.userName}>Password:</p>
//           <p className={styles.userName}>Location:</p>
//         </span>
//       </div>
//       <Form className={styles.inputBg}>
//         <Form.Control
//           type="text"
//           name="user_name"
//           value={userData.user_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg1}>
//         <Form.Control
//           type="text"
//           name="first_name"
//           value={userData.first_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg2}>
//         <Form.Control
//           type="text"
//           name="last_name"
//           value={userData.last_name}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg3}>
//         <Form.Control
//           type="password"
//           name="password_hash"
//           value={userData.password_hash}
//           onChange={handleChange}
//         />
//       </Form>
//       <Form className={styles.inputBg4}>
//         <Form.Control
//           type="text"
//           name="location"
//           value={userData.location}
//           onChange={handleChange}
//         />
//       </Form>
//       {accountMessage && <p>{accountMessage}</p>}
//     </div>
//   );
// }
