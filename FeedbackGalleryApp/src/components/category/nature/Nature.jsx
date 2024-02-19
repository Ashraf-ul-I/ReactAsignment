import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import natureDb from '../../../data/db.json'
import Spinner from '../../Spinner/Spinner';
const Nature = () => {
    const { galleryId } = useParams();
    const [fetchNature, setFetchNature] = useState([]);
    const [showNature, setShowNature] = useState(true);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            const fetchN = () => {
                const nature = natureDb.nature.filter((item) => item.galleryId === galleryId);
                setFetchNature(nature);
                setShowNature(false);
            }
            fetchN();
        }, 2000)
        return () => clearTimeout(timeOutId);
    }, [galleryId])


    return (
        <div className='grid gap-4 m-4 sm:grid-cols-3'>
            {
                showNature ? (<Spinner />) : (
                    fetchNature.map((item) => {
                        return (
                            <div key={item.id} className='min-h-full rounded shadow-xl'>
                                <img
                                    className='min-h-full rounded shadow-xl'
                                    src={`/${item.image}`} alt="" />
                            </div>

                        )
                    })
                )
            }
        </div>
    )
}

export default Nature