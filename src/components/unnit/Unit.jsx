import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsCircle } from 'react-icons/bs';

const Unit = ({item}) => {

    const linkPath = '/unit/' + item.id;

    return (
        <Link to={linkPath}>
            <div className='border-b-2 py-2 bg-slate-100 px-4 hover:bg-opacity-40'>
                <h1 className='text-2xl font-semibold'>{item.name}</h1>
                <div className='ml-4 w-full flex items-center justify-between'>
                    <h1 className='text-xl'>{item.overview}</h1>
                    {
                        item.check ? <AiFillCheckCircle className='font-bold mr-40' /> : <BsCircle className='font-bold mr-40'/>
                    }
                </div>
            </div>
        </Link>
    )
}

export default Unit;