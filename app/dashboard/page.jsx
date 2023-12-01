"use client"

import Sidebar from "@/components/Sidebar";
import Weather from "@/components/Weather";
import CreatePost from "@/components/CreatePost";
import AccountForm from "@/components/Account";
import AddFolderForm from "./components/AddFolderForm"
import React, { useState } from 'react';
const AddFolderPage = () => {
    const [folders, setFolders] = useState([]);

    const handleAddFolder = (newFolder) => {
      // Add the new folder to the state
      setFolders((prevFolders) => [...prevFolders, newFolder]);
    };

    return (
        <>
            <Sidebar />
            
            
            <h3 className="text-2xl text-center">Task Tracker</h3>
            <hr className="border-2 border-gray-200 my-4 rounded-full w-1/2 mx-auto" />
            <div className="text-center">
            <AddFolderForm onAddFolder={handleAddFolder} folders={folders} />
            </div>

            <h3 className="text-2xl text-center">Create Post</h3>
            <hr className="border-2 border-gray-200 my-4 rounded-full w-1/2 mx-auto" />

            <div className='w-1/2 mx-auto'>
                <CreatePost></CreatePost>
            </div>


        </>
    )
}
export default AddFolderPage;
