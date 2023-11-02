// index.tsx


import ProfileBar from '@/components/ProfileBar'
import Sidebar from '@/components/Sidebar'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import Post from '@/components/searchPost';


export default function Home() {
  return (
    
    <html lang="en">
      
    <body>
      
    <div className="float-container">
    <div><Sidebar/>
    </div>
    
    <div className='float-child right'>
      <Post></Post>
    </div>
    </div>
     </body>
     
   </html>
       
    
  )
}