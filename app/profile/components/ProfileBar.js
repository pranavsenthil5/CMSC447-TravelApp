'use client'
// src/components/ProfileBar.js
import React, { useState } from 'react';
import { Avatar, Box, Typography, Button, Dialog, DialogTitle, DialogContent, TextField, IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import  {useUser} from './UserContext'

const ProfileBar = () => {
  const { user, uploadAvatar, uploadCoverPhoto, editProfile } = useUser();
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [newUsername, setNewUsername] = useState(user.username);
  const [newLocation, setNewLocation] = useState(user.location);

  const handleEditClick = () => {
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleSaveChanges = () => {
    editProfile(newUsername, newLocation);
    handleEditDialogClose();
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    uploadAvatar(file);
  };

  const handleCoverPhotoUpload = (e) => {
    const file = e.target.files[0];
    uploadCoverPhoto(file);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
      width={600}
      height={300}
      position="relative"
      style={{ backgroundImage: `url(${user.coverPhotoUrl})`, backgroundSize: 'cover' }}
    >
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="avatar-input"
        type="file"
        onChange={handleAvatarUpload}
      />
      <label htmlFor="avatar-input">
        <IconButton
          style={{ position: 'absolute', bottom: 10, right: 60, color: 'black' }}
          component="span"
        >
          <PhotoCameraIcon />
        </IconButton>
      </label>

      <Avatar
        alt="Profile Picture"
        src={user.avatarUrl}
        style={{ width: 100, height: 100, border: '2px solid blue' }}
        onClick={handleAvatarUpload}
      />

      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="cover-photo-input"
        type="file"
        onChange={handleCoverPhotoUpload}
      />
      <label htmlFor="cover-photo-input">
        <IconButton
          style={{ position: 'absolute', bottom: 10, right: 10, color: 'black' }}
          component="span"
        >
          <PhotoCameraIcon />
        </IconButton>
      </label>

      <Box mt={2} textAlign="center">
        <Typography variant="h6" style={{ color: 'white' }}>
          {user.username}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" style={{ color: 'white' }}>
          {user.location}
        </Typography>
      </Box>
      <Box mt={2}>
        <Button variant="outlined" size="small" onClick={handleEditClick}>
          Edit Profile
        </Button>
      </Box>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            label="New Username"
            fullWidth
            variant="outlined"
            margin="normal"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <TextField
            label="New Location"
            fullWidth
            variant="outlined"
            margin="normal"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ProfileBar;