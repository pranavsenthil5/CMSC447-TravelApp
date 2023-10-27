"use client"
import Image from "next/image";
import { BiUserCircle } from "react-icons/bi";
import { BiNotification } from "react-icons/bi";
import { BiBookHeart } from "react-icons/bi";
import { BiTask } from "react-icons/bi";
import { BiMenu,BiHomeAlt2 } from "react-icons/bi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useState} from "react";
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
const sidebarItems = [
  {
    name: "My Post",
    href: "/mypost",
    icon: BiUserCircle,
  },
  {
    name: "My Destination",
    href: "/collectionDir",
    icon: BiBookHeart,
  },
  {
    name: "Home",
    href: "/",
    icon: BiHomeAlt2,
  },
  
];
export default function ProfileBar() {
  return (
    <div>
    <div className="gradient-custom-2" style={{backgroundColor:'rgb(128, 205, 89,0.2)', height:'300px' }}>
      
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard style={{marginTop:'-20px'}}>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundImage: 'url(cover.png)', height: '160px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '120px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{height: '30px', width:'130px', marginBlock:'-5px', marginLeft:'-10px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">Andy Horwitz</MDBTypography>
                 
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa', height:'80px' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                  </div>
                </div>
              </div>
              
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </div>
    <div className="float-child left">
      
      <aside className="sidebar">
        <div className="sidebar__top">
          
         
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
}
