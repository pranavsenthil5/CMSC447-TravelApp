'use client'
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: 'Your Username',
    location: 'Your Location',
    avatarUrl: 'https://placekitten.com/64/64', // Default avatar URL
    coverPhotoUrl: 'cover-photo.jpg', // Default cover photo URL
  });

  const uploadAvatar = (file) => {
    console.log('Uploading avatar:', file);
    setUser((prevUser) => ({
      ...prevUser,
      avatarUrl: URL.createObjectURL(file),
    }));
  };

  const uploadCoverPhoto = (file) => {
    console.log('Uploading cover photo:', file);
    setUser((prevUser) => ({
      ...prevUser,
      coverPhotoUrl: URL.createObjectURL(file),
    }));
  };

  const editProfile = (newUsername, newLocation) => {
    setUser((prevUser) => ({
      ...prevUser,
      username: newUsername,
      location: newLocation,
    }));
  };

  return (
    <UserContext.Provider value={{ user, uploadAvatar, uploadCoverPhoto, editProfile }}>
      {children}
    </UserContext.Provider>
  );
};