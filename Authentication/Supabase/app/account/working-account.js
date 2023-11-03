// 'use client'
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



//correct input boxes



// 'use client'
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







///works but signout not in right place 



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


///works both singout and update


import { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";
import axios from 'axios';
import styles from "./Frame6UserLoginEditUser.module.css";

// Import the background image and the ellipse image
import backgroundImage from './travel.png'; // Make sure to place the background image in the same folder as your account-form.jsx
import ellipseImage from './ellipse-3@2x.png'; // Make sure to place the ellipse image in the same folder as your account-form.jsx

export default function AccountForm({ session }) {
  const [loading, setLoading] = useState(true);
  const [accountMessage, setAccountMessage] = useState("");
  const apiUrl = 'http://127.0.0.1:5000/account';

  const [userData, setUserData] = useState({
    user_name: "",
    first_name: "",
    last_name: "",
    password_hash: "",
    location: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const updateProfile = async () => {
    try {
      const response = await axios.post(apiUrl, userData);

      if (response.status === 201) {
        setAccountMessage("Account created successfully!");
      } else {
        setAccountMessage(`Error: ${response.data.error}`);
      }
    } catch (error) {
      setAccountMessage(`Error: ${error}`);
    }
  }

  useEffect(() => {
    // Your getProfile and updateProfile functions remain the same
  }, [session]);

  const handleSignOut = () => {
    // Redirect to the original site (localhost:3000)
    window.location.href = 'http://localhost:3000';
  }

  return (
    <div
      className={styles.frame6UserLoginEditUser}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <img
        className={styles.frame6UserLogineditUserChild}
        src={ellipseImage}
        alt="Ellipse"
      />
      <div className={styles.drift}>Drift</div>
      <button className={styles.uploadPicture}>Upload Picture:</button>
      <div className={styles.editProfile}>Edit Profile</div>
      <button className={styles.frame6UserLogineditUserItem} onClick={updateProfile}>
        Update
      </button>
      <div className={styles.signOutBox}> {/* Red box */}
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