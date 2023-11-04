'use client'
import BaseLayout from '@/components/BaseLayout';
import ProfileBar from '@/components/ProfileBar'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {  MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';



import Directory from '@/components/Directory'

export default function mypost() {
  return (
    
   
      
    <body>
    <div className="float-container">
    
      <ProfileBar/>
      
      <div className='float-child right'>
      <BaseLayout>Destination's directory
      {<Directory></Directory>}
      </BaseLayout>
      
      
      </div>
      </div>
    </body>
     
  
    
  )
}