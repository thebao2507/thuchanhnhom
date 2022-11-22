import React, { useEffect, useState } from 'react';
import HeaderContent from '../../components/headerContent/HeaderContent';
import { Link, useParams } from 'react-router-dom';
import './content.scss';

const listContentUnit = [
    {
        id: 1,
        name: 'Unit 1',
        overview: 'Begin: Environment xxxxxxxxxxxx',
        contents: [
            { content: 'introduction' },
            { content: 'concept for lol' }
        ],
        check: true,
    },
    {
        id: 2,
        name: 'Unit 2',
        overview: 'Begin: Environment xxxxxxxxxxxx',
        contents: [
            { content: 'introduction' },
            { content: 'concept for lol' }
        ],
        check: true,
    },
    {
        id: 3,
        name: 'Unit 3',
        overview: 'Begin: Environment xxxxxxxxxxxx',
        contents: [
            { content: 'introduction' },
            { content: 'con chim 123' }
        ],
        check: false,
    },
    {
        id: 4,
        name: 'Unit 4',
        overview: 'Begin: Environment xxxxxxxxxxxx',
        contents: [
            { content: 'introduction' },
            { content: 'concept for lol' }
        ],
        check: false,
    },
]

const Content = () => {
    const { id } = useParams();
    const linkQuiz = '/quiz/' + id;
    const data = listContentUnit.find((item) => item.id === Number(id));
    //console.log(data)

    return (
        <>
            <HeaderContent id={id} />
            <div className='w-full mt-12 h-full body__content'>
                <div className='w-[98%] h-full bg-slate-50 mx-auto'>
                    <div>
                        <h1 className='text-2xl font-semibold pl-3 pt-3'>{data.name}</h1>
                    </div>
                    <div className='h-[50px] text-black border-b-2 flex items-center justify-between'>
                        <p className='text-2xl pl-10'>{data.overview}</p>
                        <div>
                            <Link to={linkQuiz}><button className='mr-40 w-[100px] py-1 px-6 bg-slate-400 font-semibold text-xl rounded-3xl'>Quiz</button></Link>
                        </div>
                    </div>
                    <div className='pl-4 pt-2'>
                        {
                            data.contents.map((item) => (
                                <p>{item.content}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;