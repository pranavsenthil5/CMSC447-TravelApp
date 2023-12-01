import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, TextField, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { AlignHorizontalCenter, Delete } from '@mui/icons-material';
import Image from "next/image";
import Link from "next/link";
import { color } from 'framer-motion';

const AddFolderForm = ({ onAddFolder }) => {
  const [showForm, setShowForm] = useState(false);
  const [folders, setFolders] = useState([]);
  const initialValues = {
    folderName: '',
    location: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Submitted values:', values);

  const newFolder = {
      id: new Date().getTime(),
      folderName: values.folderName,
      location: values.location,
    };

    setFolders((prevFolders) => [...prevFolders, newFolder]);
    onAddFolder(newFolder);
    resetForm();
    setShowForm(false);
  };

  const handleDeleteFolder = (folderId) => {
    setFolders((prevFolders) => prevFolders.filter((folder) => folder.id !== folderId));
    console.log('Deleting folder with id:', folderId);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => setShowForm(true)}>
        New Folder
      </Button>
      
      {showForm && (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
         
          <Form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
            <Field
              name="folderName"
              label="Folder Name"
              as={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <Field
              name="location"
              label="Location"
              as={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            
              <Button type="submit" variant="outlined" color="info" style={{ marginTop: '10px' }}>
                Create Folder
              </Button>
              <Button variant="outlined" color="info" onClick={() => setShowForm(false)} style={{ marginTop: '10px' }}>
                Cancel
              </Button>
            </div>
            
          </Form>
          
        </Formik>
      )}

<div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px', marginLeft: '20%'}}>
  {folders.map((folder) => (
    
    
      <div style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card style={{ width: '100px', margin: '10px', position: 'relative' }}>
          <CardMedia
            component="img"
            height="140"
            image="/folder.jpg"
            alt="Folder Image"
          />
          <Link
      href={{
        pathname: "/DirPage",
        query: {
          name: folder.folderName,
        },
      }}
      key={folder.id}
      passHref
    >
          <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           
              
            </div>
            <span>{folder.folderName}</span>
          </CardContent>
          </Link>
          <IconButton onClick={() => handleDeleteFolder(folder.id)} size="small" style={{ position: 'absolute', top: '5px', right: '5px' }}> 
      <Delete /> 
    </IconButton>
        </Card>
      </div>
    
    
      
  
  ))}
      </div>
    </div>
  );
};

export default AddFolderForm;