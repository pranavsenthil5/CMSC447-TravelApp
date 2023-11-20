import ProfileBar from "@/components/ProfileBar";
import ImageGrid from "@/components/imageGrid";
import TaskTracker from "@/components/TaskTracker"
export default function CollectPage({searchParams}:{searchParams:{name: String;}}){
   
    return(
      <div className="float-container">
    
      <ProfileBar/>
      
      <div className='float-child right'>
        <h1>{searchParams.name}</h1>
        <TaskTracker></TaskTracker>
      </div>
      </div>
    )
}

