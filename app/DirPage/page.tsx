'use client'

import ImageGrid from "@/components/imageGrid";
import TaskTracker from "./components/TaskTracker"

import Sidebar from "@/components/Sidebar";
import Weather from "@/components/Weather";
import SavedPost from "./components/SavedPost";

export default function CollectPage({ searchParams }: { searchParams: { name: String, id: number, location: string} }) {

  return (
    <div>
      <Sidebar />



      <h3 className="text-2xl text-center">{searchParams.name}, {searchParams.location}</h3>
      <hr className="border-2 border-gray-200 my-4 rounded-full w-1/2 mx-auto" />



      <div className="bg-red-100 w-1/2 mx-auto rounded-lg my-4">
        <Weather defaultLocation= {searchParams.location} />
        </div>


      
      <h3 className="text-xl text-center">Tasks</h3>
      <hr className="border-2 border-gray-200 my-4 rounded-full w-1/2 mx-auto" />
      <div className='w-1/2 mx-auto'>
        <TaskTracker id={searchParams.id} user_id={1}></TaskTracker>
      </div>

      <h3 className="text-xl text-center">Saved Posts</h3>
      <hr className="border-2 border-gray-200 my-4 rounded-full w-1/2 mx-auto" />

      <div className='mx-auto'>
        <SavedPost collection_id={searchParams.id}></SavedPost>
      </div>


    </div>
  )

}




