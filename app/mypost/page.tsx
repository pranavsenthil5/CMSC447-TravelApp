
import BaseLayout from './components/BaseLayout';
import ProfileBar from './components/ProfileBar'
import Post from './components/searchPost';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


export default function mypost() {
  return (
      
    <body>
    <div className="float-container">
    
      <ProfileBar/>
      
      <div className='float-child right'>
      <BaseLayout>User's post go here
      <Post></Post></BaseLayout>
      </div>
      </div>
    </body>
     
  
    
  )
}