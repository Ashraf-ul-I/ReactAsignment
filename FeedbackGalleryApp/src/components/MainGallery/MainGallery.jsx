import React, { useState } from 'react';
import galleryDb from '../../data/db.json';
import { useNavigate } from 'react-router-dom';

const MainGallery = () => {
    const navigate = useNavigate();

    const handleClick = (category, galleryId) => {
        navigate(`/${category}/${galleryId}`);
        console.log(galleryId);
    };

    return (
        <div className='grid gap-8 m-4 sm:grid-cols-2 sm:px-28'>
            {galleryDb.gallery.map((item) => (
                <div
                    key={item.id}
                    className='h-[300px] w-[500px]sm:px-28 rounded shadow-xl bg-red-200'
                    onClick={() => handleClick(item.category, item.id)}
                >
                    <img className='h-full w-full rounded shadow-xl' src={item.image} alt='' />
                    <span className='sm:justify-center sm:items-center flex px-4 font-semibold'>{item.category}</span>
                </div>
            ))}
        </div>
    );
};

export default MainGallery;
