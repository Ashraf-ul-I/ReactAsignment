// In your components (Animal.jsx and Nature.jsx)

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimals } from '../../../app/actions/animalActions'; // Import Redux action

import Spinner from '../../Spinner/Spinner';

const Animals = () => {
    const dispatch = useDispatch();
    const { galleryId } = useParams();
    const { data: filteredAnimals, loading: showSpinner } = useSelector((state) => state.animal);

    useEffect(() => {
        dispatch(fetchAnimals(galleryId));
    }, [dispatch, galleryId]);

    return (
        <div className='grid gap-4 m-4 sm:grid-cols-3'>
            {showSpinner ? (
                <Spinner />
            ) : (
                filteredAnimals.map((item) => (
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
