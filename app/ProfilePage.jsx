// ProfilePage.jsx

import { useState } from 'react';
import AccountForm from './account/account-form';
import ProfileBar from './DirPage/components/ProfileBar';

export default function ProfilePage() {
  const [uploadedPictureUrl, setUploadedPictureUrl] = useState('');

  const handleAvatarUpload = (url) => {
    setUploadedPictureUrl(url);
  };

  return (
    <div>
      <AccountForm onAvatarUpload={handleAvatarUpload} />
      <ProfileBar uploadedPictureUrl={uploadedPictureUrl} />
    </div>
  );
}
