// In your components (Animal.jsx and Nature.jsx)

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../redux/galleryData';
import { STATUSES } from '../../../redux/galleryData';

import Spinner from '../../Spinner/Spinner';

const Animals = () => {
    const dispatch = useDispatch();
    const { galleryId } = useParams();
    const { data: filteredAnimals, status: showSpinner } = useSelector((state) => state.gData);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <div className='grid gap-4 m-4 sm:grid-cols-3'>
            {showSpinner === STATUSES.LOADING ? (
                <Spinner />
            ) : (
                filteredAnimals.animal.filter((item) => item.galleryId === galleryId).map((item) => (
                    <div key={item.id} className='min-h-full rounded shadow-xl'>
                        <img
                            className='min-h-full rounded shadow-xl'
                            src={`/${item.image}`}
                            alt={`Animal ${item.id}`}
                        />
                    </div>
                ))
            )}
        </div>
    );
};

export default Animals;
