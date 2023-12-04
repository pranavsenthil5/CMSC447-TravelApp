

import ImageGrid from "@/components/imageGrid";
import TaskTracker from "./components/TaskTracker"
import Sidebar from "@/components/Sidebar";
export default function CollectPage({searchParams}:{searchParams:{name: String, id: number}}){
   
    return(
      <div>
      <Sidebar />
      <h3 className="text-2xl text-center">{searchParams.name}</h3>
      <hr className="border-2 border-gray-200 my-4 rounded-full w-1/2 mx-auto" />

     

      <div className='w-1/2 mx-auto'>
      <TaskTracker id={searchParams.id} user_id={1}></TaskTracker>
      </div>

      <h3 className="text-2xl text-center">Saved Posts</h3>
      <hr className="border-2 border-gray-200 my-4 rounded-full w-1/2 mx-auto" />
      </div>
    )
    
}




