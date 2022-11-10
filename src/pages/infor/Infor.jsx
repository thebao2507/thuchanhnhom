import React from 'react';
import { Link } from 'react-router-dom';
import './infor.scss';

const Infor = () => {
    return (
        <>
            <div className='bg-slate-300 h-screen w-full relative'>
                <div className='w-full h-full absolute bg-black/20 top-0 left-0 bottom-0'></div>
                <Link to='/home' className='absolute bg-black px-5 py-2 link__home my-2 text-white rounded-xl font-semibold'>Home</Link>
                <div className='absolute w-full px-4 mt-14'>
                    <div className='max-w-[900px] h-[580px] mx-auto bg-white rounded-xl'>
                        <h1 className='py-3 pl-6 text-xl border-b-2 thongtin__account'>Account Details</h1>
                        <form action="" className='text-center'>
                            <div className='py-2 text-center'>
                                <h1 className='font-semibold text-left w-[850px] h1__user'>Username</h1>
                                <input
                                    className='w-[850px] text-slate-500 rounded-lg p-[10px] input__user'
                                    placeholder="Hieu dau moi"
                                    type="text"
                                />
                            </div>
                            <div className='w-[850px] flex justify-between mx-auto'>
                                <div className='py-2'>
                                    <h1 className='font-semibold text-left w-[415px] mb-1'>First name</h1>
                                    <input
                                        className='w-[415px] text-slate-500 rounded-lg p-[10px] input__fname'
                                        placeholder="quan con"
                                        type="text"
                                    />
                                </div>
                                <div className='py-2'>
                                    <h1 className='font-semibold text-left w-[415px] mb-1'>Last name</h1>
                                    <input
                                        className='w-[415px] text-slate-500 rounded-lg p-[10px] input__lname'
                                        placeholder="bo"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className='py-2 text-center'>
                                <h1 className='font-semibold text-left w-[850px] h1__user'>Email</h1>
                                <input
                                    className='w-[850px] text-slate-500 rounded-lg p-[10px] input__user'
                                    placeholder="hanhdikinh@gmail.com"
                                    type="text"
                                />
                            </div>
                            <div className='w-[850px] flex justify-between mx-auto'>
                                <div className='py-2'>
                                    <h1 className='font-semibold text-left w-[415px] mb-1'>Phone number</h1>
                                    <input
                                        className='w-[415px] text-slate-500 rounded-lg p-[10px] input__fname'
                                        placeholder="2312312321"
                                        type="text"
                                    />
                                </div>
                                <div className='py-2'>
                                    <h1 className='font-semibold text-left w-[415px] mb-1'>Birthday</h1>
                                    <input
                                        className='w-[415px] text-slate-500 rounded-lg p-[10px] input__lname'
                                        placeholder="1/1/1111"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className='w-[850px] flex justify-between mx-auto'>
                                <div className='py-2'>
                                    <h1 className='font-semibold text-left w-[415px] mb-1'>Password</h1>
                                    <input
                                        className='w-[415px] text-slate-500 rounded-lg p-[10px] input__fname'
                                        placeholder="hacker lor"
                                        type="text"
                                    />
                                </div>
                                <div className='py-2'>
                                    <h1 className='font-semibold text-left w-[415px] mb-1'>New Password</h1>
                                    <input
                                        className='w-[415px] text-slate-500 rounded-lg p-[10px] input__lname'
                                        placeholder="hacker uy tin"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <button className='py-2 bg-black/80 rounded-xl px-2 mt-4 text-white font-semibold hover:opacity-60' type="button">Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Infor;