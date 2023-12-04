import { ImageList, ImageListItem } from '@mui/material';
import { useState } from 'react';

interface ImageGridProps {
    images: string[];
    location: string;
}

export default function ImageGrid({ images, location }: ImageGridProps) {

    // keep showing images by switching to next image every 2 seconds
    
    const [firstImage, setFirstImage] = useState(images[0]);
    const [index, setIndex] = useState(0);

    setInterval(() => {
        setIndex((index + 1) % images.length);
        setFirstImage(images[index]);
    }, 2000);

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
