import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import styles from './Frame6UserLoginEditUser.module.css';

// Import the background image and the ellipse image
import backgroundImage from './travel.png'; // Make sure to place the background image in the same folder as your account-form.jsx
import ellipseImage from './ellipse-3@2x.png'; // Make sure to place the ellipse image in the same folder as your account-form.jsx

export default function AccountForm({ session }) {
  const apiUrl = 'http://127.0.0.1:5000/account';

  const [userData, setUserData] = useState({
    user_name: '',
    first_name: '',
    last_name: '',
    password_hash: '',
    location: '',
  });

  const [accountMessage, setAccountMessage] = useState(''); // State for the account creation message

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const createAccount = async () => {
    try {
      const response = await axios.post(apiUrl, userData);

      if (response.status === 201) {
        setAccountMessage('Account created successfully!'); // Set the account creation message
      } else {
        setAccountMessage(`Error: ${response.data.error}`);
      }
    } catch (error) {
      setAccountMessage(`Error: ${error}`);
    }
  };

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
      <div className={styles.editProfile}>Edit Profile</div>
      <div className={styles.update}>
        <button onClick={createAccount} className="btn btn-primary">
          Create Account
        </button>
      </div>
      <div className={styles.signOut}>
        <form action="/auth/signout" method="post">
          <button className="btn btn-danger" type="submit">
            Sign Out
          </button>
        </form>
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
      {accountMessage && <p>{accountMessage}</p>} {/* Display the account creation message */}
    </div>
  );
}
