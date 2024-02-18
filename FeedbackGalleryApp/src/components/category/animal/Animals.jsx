import React, { Suspense } from 'react';
import db from '../../../data/db.json';
import LazyLoad from 'react-lazyload';
import SkeletonComponent from './SkeletonComponent';
const Animal = () => {
    return (
        <div className='grid gap-4 m-4 sm:grid-cols-3'>
            {db.animal.map((item) => (
                <LazyLoad key={item.id}>
                    <Suspense fallback={<SkeletonComponent />}>
                        <img
                            className='min-h-full rounded shadow-xl'
                            src={item.image}
                            alt={`Animal ${item.id}`}
                        />
                    </Suspense>
                </LazyLoad>
            ))}
        </div>
    );
};

export default Animal;
