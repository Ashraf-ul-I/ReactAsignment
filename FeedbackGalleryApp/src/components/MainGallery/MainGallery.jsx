// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchGalleryData } from '../../features/galleryManage/gmSlice';
// import { Spinner } from 'reactstrap';
// import galleryDb from '../../data/db.json'

// const MainGallery = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { data, status, error } = useSelector((state) => state.gallery);

//     const handleClick = (category, galleryId) => {
//         navigate(`/${category}/${galleryId}`);
//         console.log(galleryId);
//     };

//     useEffect(() => {
//         if (status === 'idle') {
//             dispatch(fetchGalleryData());
//         }
//     }, [dispatch, status]);

//     let content;

//     if (status === 'loading') {
//         content = <Spinner />;
//     } else if (status === 'succeeded') {
//         content = (
//             <div className='grid gap-8 m-4 sm:grid-cols-2 sm:px-28'>
//                 {galleryDb.gallery.map((item) => (
//                     <div
//                         key={item.id}
//                         className='h-[300px] w-[500px]sm:px-28 rounded shadow-xl bg-red-200'
//                         onClick={() => handleClick(item.category, item.id)}
//                     >
//                         <img className='h-full w-full rounded shadow-xl' src={item.image} alt='' />
//                         <span className='sm:justify-center sm:items-center flex px-4 font-semibold'>{item.category}</span>
//                     </div>
//                 ))}
//             </div>
//         );
//     } else if (status === 'failed') {
//         content = <div>{error}</div>;
//     }

//     return <div>{content}</div>;
// };

// export default MainGallery;

import React, { useEffect, useState } from 'react';
import galleryDb from '../../data/db.json';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../../redux/galleryData';
import { fetchData } from '../../redux/galleryData';

const MainGallery = () => {
    const navigate = useNavigate();

    const { data, status } = useSelector((state) => state.gData);
    const dispatch = useDispatch();
    const handleClick = (category, galleryId) => {
        navigate(`/${category}/${galleryId}`);
        console.log(galleryId);
    };

    useEffect(() => {

        dispatch(fetchData);

    }, [])

    return (
        <div className='grid gap-8 m-4 sm:grid-cols-2 sm:px-28'>
            {status === STATUSES.IDLE ? (data.map((item) => (
                <div
                    key={item.id}
                    className='h-[300px] w-[500px]sm:px-28 rounded shadow-xl bg-red-200'
                    onClick={() => handleClick(item.category, item.id)}
                >
                    <img className='h-full w-full rounded shadow-xl' src={item.image} alt='' />
                    <span className='sm:justify-center sm:items-center flex px-4 font-semibold'>{item.category}</span>
                </div>
            ))) : <h4>Loading</h4>}
        </div>
    );
};

export default MainGallery;