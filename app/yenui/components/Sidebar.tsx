"use client"
// side nevigation bar in the homepage
import Image from "next/image";
import { BiUserCircle } from "react-icons/bi";
import { BiNotification } from "react-icons/bi";
import { BiBookHeart } from "react-icons/bi";
import { BiTask } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useState} from "react";



const sidebarItems = [
  {
    name: "Profile",
    href: "/mypost",
    icon: BiUserCircle,
  },
  {
    name: "Notification",
    href: "/",
    icon: BiNotification,
  },
  {
    name: "My Destination",
    href: "/collectionDir",
    icon: BiBookHeart,
  },
  
];

export default function Sidebar(){
  const [isCollapsedSidebar, setIsCollapsedSidebar] = useState<boolean>(false);
  const toggleSidebarcollapseHandler = () =>{

    setIsCollapsedSidebar(prev => !prev);
    console.log(isCollapsedSidebar)
  };
  return (
    <div>
    <div className="sidebar__wrapper">
      
    
      <aside className="sidebar" data-collapse={isCollapsedSidebar}>
      <button className="menuBtn" onClick={toggleSidebarcollapseHandler}>
       {isCollapsedSidebar? <MdKeyboardArrowLeft/> :<MdKeyboardArrowRight/> }
      </button>
        <div className="sidebar__top">
          
          <p className="sidebar__logo-name">User Name</p>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
    </div>
  );
};

