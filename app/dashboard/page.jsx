"use client"

import Sidebar from "@/components/Sidebar";
import Weather from "@/components/Weather";
import CreatePost from "@/components/CreatePost";
import AccountForm from "@/components/Account";
import AddFolderForm from "./components/AddFolderForm"
import React, { useEffect, useState } from 'react';
import { get } from "http";
import { NextResponse } from "next/server";


const AddFolderPage = () => {
  const [folders, setFolders] = useState([]);
  const [enable, setEnable] = useState(false);

  const handleAddFolder = (newFolder) => {
    setFolders((prevFolders) => [...prevFolders, newFolder]);
  };

  useEffect(() => {
    console.log("USE EFFECT");
    fetch("http://127.0.0.1:8080/api/collection/all/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",

      },
      mode: "cors",
    }).then(async (res) => {
      if (res.status === 200) {
        const data = await res.json();
        console.log("GET COLLECTIONS", data);

        data.forEach((collection) => {
          var folder = {
            id: collection.id,
            folderName: collection.name,
            location: collection.location,
          };
          console.log("FOLDER", folder);

          folders.some((folder) => folder.id === collection.id) ? console.log("FOLDER ALREADY EXISTS") : handleAddFolder(folder);
    

        });
        setEnable(true);

      }
    }
    ).catch((err) => {
      console.log(err);
    }
    );
  }
    , []);


  return (
    <>
      <Sidebar />
      <h3 className="text-2xl text-center">Task Tracker</h3>
      <hr className="border-2 border-gray-200 my-4 rounded-full w-1/2 mx-auto" />
      <div className="text-center">
        <AddFolderForm onAddFolder={handleAddFolder} folders={folders} setFolders={setFolders}/>
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
