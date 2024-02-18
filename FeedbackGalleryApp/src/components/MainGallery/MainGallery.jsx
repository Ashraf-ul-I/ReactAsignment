import React, { useState } from 'react'
import galleryDb from '../../data/db.json'

const MainGallery = () => {
    const [showAnimal, setShowAnimal] = useState();

    const animalSHowing = () => {

    }

    return (
        <div className='grid gap-8 m-4 sm:grid-cols-2 sm:px-28'>
            {
                galleryDb.gallery.map((item) => (
                    <div key={item.id} className='h-[300px] w-[500px]sm:px-28 rounded shadow-xl bg-red-200'>
                        <img className='h-full w-full rounded shadow-xl bg-red-200'
                            src={item.image} alt="" />
                        <span className='sm:justify-center sm:items-center flex px-4 font-semibold'>{item.category}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default MainGallery
