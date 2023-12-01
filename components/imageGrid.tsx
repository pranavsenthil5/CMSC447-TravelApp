import React from 'react';
import Image from 'next/image';
import { ImageList, ImageListItem } from '@mui/material';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';



interface ImageGridProps {
    images: string[];
    location: string;
}


export default function ImageGrid({ images, location }: ImageGridProps) {

    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
      ];
      
    return (
        <>
            <div className="flex flex-row mb-10">
                <div className="text-3xl font-sans hover:text-blue-600">
                    <span className="font-light">{location}</span>
                </div>
            </div> 
            <ImageList cols={6}  style={{ maxHeight: '70%', maxWidth: '70%', margin: '0px' }}>
                {
                    images.map((image, index) => (
                        <ImageListItem key={index} cols={index === 0 ? 6 : 3} rows={index === 0 ? 2 : 1}>
                            <img src={image} alt="" />
                        </ImageListItem>
                    ))
                }
            </ImageList>
            <SpeedDial
                ariaLabel="SpeedDial example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                    />
                ))}
            </SpeedDial>

        </>

    );
}
