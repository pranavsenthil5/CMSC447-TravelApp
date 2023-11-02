'use client'
import { useCallback, useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import axios from 'axios';

export default function AccountForm({ session }) {
  const supabase = createClientComponentClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState(null);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const user = session?.user;
  
  const [userData, setUserData] = useState({
    user_name: "",
    first_name: "",
    last_name: "",
    password_hash: "",
    location: "",
    email: session?.user.email, // Include email from Supabase

  });
  const [accountMessage, setAccountMessage] = useState(""); // State for the account creation message

  const apiUrl = 'http://127.0.0.1:5000/account';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const createAccount = async () => {
    try {
      const response = await axios.post(apiUrl, userData);

      if (response.status === 201) {
        setAccountMessage("Account created successfully!"); // Set the account creation message
      } else {
        setAccountMessage(`Error: ${response.data.error}`);
      }
    } catch (error) {
      setAccountMessage(`Error: ${error}`);
    }
  }

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url`)
        .eq('id', user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert('Error loading user data!');
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert('Profile updated!');
    } catch (error) {
      alert('Error updating the data!');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>User Login</h1>
      <div className="form-widget">
        <div>
          <label htmlFor="email">Email : </label>
          <input
            id="email"
            type="text"
            value={session?.user.email}
            style={{ display: 'inline-block', width: '50%' }}
            disabled
          />
        </div>


      {/* Your Account Creation Form */}
      <form>
        <div className="mb-3">
          <label>User Name: </label>
          <input
            type="text"
            className="form-control"
            name="user_name"
            value={userData.user_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>First Name: </label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            value={userData.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Last Name: </label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            value={userData.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Password: </label>
          <input
            type="password"
            className="form-control"
            name="password_hash"
            value={userData.password_hash}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Location: </label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={userData.location}
            onChange={handleChange}
          />
        </div>
        {accountMessage && <p>{accountMessage}</p>} {/* Display the account creation message */}
        <button type="button" onClick={createAccount} className="btn btn-primary">
          Create Account
        </button>
      </form>
      <div>
          <form action="/auth/signout" method="post">
            <button className="button block" type="submit">
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

