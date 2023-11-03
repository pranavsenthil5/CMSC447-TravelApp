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

