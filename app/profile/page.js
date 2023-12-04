import React from 'react';
import ProfileBar from './components/ProfileBar'
import { UserProvider } from './components/UserContext';
import Sidebar  from '@/components/Sidebar';

const ProfilePage = () => {
  return (
    
      <>
      <Sidebar />
      <h3 className="text-2xl text-center">Profile</h3><hr className="border-2 border-gray-200 my-4 rounded-full w-1/2 mx-auto" /><div className="text-center">
      <UserProvider>
        <div>

          <ProfileBar />
          {/* Add other components/content for the profile page */}
        </div>
      </UserProvider>
    </div></>
    
  );
};

export default ProfilePage;