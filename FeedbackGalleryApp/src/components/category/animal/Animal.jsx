import React from 'react';
import db from '../../../data/db.json';
import LazyLoad from 'react-lazyload'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import image from '/images/9802blgjc5avu8ci0g0rd3ttmh-58723b5c03c5e787ee9fd935bef8bf8d.png';
const Animal = () => {
    return (
        <div className='grid gap-4 m-4 sm:grid-cols-3'>
            {db.animal.map((item) => (
                <LazyLoadImage className='min-h-full rounded shadow-xl'
                    src={item.image}
                    key={item.id}

                    height='min-h-full'
                    width='min-w-full'
                    alt={`Animal ${item.id}`}
                    placeholderSrc={image} />
            ))}
        </div>
    );
};
//stil its not efficient if the user used 3g
export default Animal;
