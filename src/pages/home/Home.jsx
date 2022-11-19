import Header from '../../components/header/Header';
import './home.scss';
import React from 'react';
import ListUnit from '../../components/listUnit/ListUnit';

const Home = () => {
    return (
        <>
            <div className='bg-white w-full h-full'>
                <div className='mt-12 pt-2 mr-3 ml-10 flex justify-between'>
                    <div className='content__unit'>
                        <ListUnit/>
                    </div>
                    <div className='model__navbar'>
                        <div className='text-center pt-24'>
                            <h1 className='text-xl font-semibold'>Learning progress: 2/24</h1>
                            <h1 className='text-xl font-semibold'>Average Point: 86/100</h1>
                        </div>
                        <div className='flex justify-center pt-5'>
                            <img className='user__avatar' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
                        </div>
                    </div>
                </div>
            </div>
            <Header />
        </>
    )
}

export default Home;