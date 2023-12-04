import { ImageList, ImageListItem } from '@mui/material';


interface ImageGridProps {
    images: string[];
    location: string;
}


// export default function ImageGrid({ images, location }: ImageGridProps) {
      
//     return (
//         <>
//             <div className="flex flex-row mb-10">
//                 <div className="text-3xl font-sans hover:text-blue-600">
//                     <span className="font-light">{location}</span>
//                 </div>
//             </div> 
//             <ImageList cols={6}  style={{ maxHeight: '70%', maxWidth: '70%', margin: '0px' }}>
//                 {
//                     images.map((image, index) => (
//                         <ImageListItem key={index} cols={index === 0 ? 6 : 3} rows={index === 0 ? 2 : 1}>
//                             <img src={image} alt="" />
//                         </ImageListItem>
//                     ))
//                 }
//             </ImageList>
//         </>

//     );
// }

export default function ImageGrid({ images, location }: ImageGridProps) {
    // Display only the first image
    const firstImage = images[0];

    return (
        <>
            <div className="flex flex-row mb-10">
                <div className="text-3xl font-sans hover:text-blue-600">
                    <span className="font-light">{location}</span>
                </div>
            </div>
            <div style={{ maxHeight: '70%', maxWidth: '70%', margin: '0px' }}>
                {firstImage && (
                    <img src={firstImage} alt="" style={{ width: '100%', height: 'auto' }} />
                )}
            </div>
        </>
    );
}
