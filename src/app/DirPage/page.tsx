import ProfileBar from "@/components/ProfileBar";
import ImageGrid from "@/components/imageGrid";
export default function CollectPage({searchParams}:{searchParams:{name: String;}}){
   
    return(
        <div className="float-container">
    
      <ProfileBar/>
      <ImageGrid></ImageGrid>
      <div className='float-child right'>
        <h1>{searchParams.name}</h1>
      
      </div>
      </div>
    )
}

