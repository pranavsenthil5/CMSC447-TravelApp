'use client'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EditDirectory from './EditDirectory'
import Directory from './Directory'
import AddDirectory from './MakeDir';
import Image from "next/image";
import Link from "next/link";
import CollectPage from '@/app/DirPage/page';

function Directorys() {
    const [directorys, setDirectorys] = useState([
       
    ]);



    function newDirectory(name) {
        const newDirectory = {
            // id: uuidv4(),
            name: name,
            // role: role,
            // img: img,
        };
        setDirectorys([...directorys, newDirectory]);
    }

    const showDirectorys = true;
    return (
        <div className="">
            {showDirectorys ? (
                <>
                    <div className="container">
                        {directorys.map((directory) => {
                        
                            return (
                                
                               <Link href={{
                                pathname: "/DirPage",
                                query:{
                                    name: directory.name,
                                },
                               }}><div className='folder'>
                                <Image src="/logo.png" width={50} height={50}/>
                               <p> {directory.name} </p>
                               
                                </div></Link>
                            );
                        })}
                        
                    </div>
                    <AddDirectory newDirectory={newDirectory} />
                </>
            ) : (
                <p>You cannot see the Directories</p>
            )}
        </div>
    );
}

export default Directorys;