import React, { useEffect, useState } from 'react';
import db from '../../../data/db.json';
import { useParams } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';

const Animal = () => {
    const { galleryId } = useParams();
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            const fetchAnimals = async () => {
                const animals = db.animal.filter((item) => item.galleryId === galleryId);
                setFilteredAnimals(animals);
                setShowSpinner(false);
            };
            fetchAnimals();
        }, 2000);
        console.log(timeoutId);
        return () => clearTimeout(timeoutId);

    }, [galleryId]);

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

export default Animal;
