"use client"

import Sidebar from "@/components/Sidebar";
import Weather from "@/components/Weather";
import CreatePost from "@/components/CreatePost";
import AccountForm from "@/components/Account";
import AddFolderForm from "./components/AddFolderForm"
import React, { useEffect, useState } from 'react';
import { get } from "http";
import { NextResponse } from "next/server";

async function getUserInfo() {
    fetch("/auth/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        if (res.status === 200) {
            const data = await res.json();
            console.log("GET USER INFO", data);
            return data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


const AddFolderPage = () => {
    const [folders, setFolders] = useState([]);

    const handleAddFolder = (newFolder) => {
      // Add the new folder to the state
      setFolders((prevFolders) => [...prevFolders, newFolder]);
    };

    useEffect(() => {
        // get the user info
        getUserInfo().then((data) => {
            console.log("USER INFO");
            console.log(data);
        }
        )}, []);
    

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
