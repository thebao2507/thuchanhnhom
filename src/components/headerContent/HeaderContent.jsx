import Tippy from '@tippyjs/react/headless';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
import './headerContent.scss';
import { MdSkipNext } from 'react-icons/md';
import { RiSkipBackMiniFill } from 'react-icons/ri';
import { RiHomeLine } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';


const MENU_ITEMS = [
    {
        icon: <MdAccountCircle />,
        title: 'Account',
        to: '/infor'
    },
    {
        icon: <CiLogout />,
        title: 'Log out',
        to: '/'
    }
]

const HeaderContent = ({ id }) => {
    const [idlink, setIdlink] = useState(Number(id));
    const [visible, setVisible] = useState(false);

    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3, 4]);
        }, 3000)
    }, []);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
    }

    const idnext = () => { if (Number(id) < 4) { const number = Number(id) + 1; return number } else return 4; };
    const idback = () => { if (Number(id) > 1) { const number = Number(id) - 1; return number } else return 1; };

    const linkNext = '/unit/' + idnext();
    const linkback = '/unit/' + idback();

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const renderItems = () => {
        return MENU_ITEMS.map((item, i) => (
            <button key={i} className='w-full h-[50px] flex items-center justify-between bg-white text-base font-semibold'>
                <Link to={item.to} className='flex items-center justify-between w-full h-full p-3 mr-4'>
                    <i className='text-xl'>{item.icon}</i>
                    {item.title}
                </Link>
            </button>
        ))
    }

    return (
        <div className='relative'>
            <div className='fixed w-full h-12 bg-neutral-400 top-0 left-0 right-0 flex items-center justify-between px-6 z-1'>
                <div className='flex'>
                    <i className='text-3xl px-2 font-medium text-black' onClick={() => window.alert("back to previous lesson")}><Link to={linkback}><RiSkipBackMiniFill /></Link></i>
                    <i className='text-3xl px-2 font-medium text-black'><Link to='/home'><RiHomeLine /></Link></i>
                    <i className='text-3xl px-2 font-medium text-black' onClick={() => window.alert("next to the lesson")}><Link to={linkNext}><MdSkipNext /></Link></i>
                </div>
                <Tippy
                    visible={searchResult.length > 0 && showResult}
                    interactive
                    render={(attrs) => (
                        <div className='w-[300px]' tabIndex="-1" {...attrs}>
                            <div className='wrapper'>
                                <h1 className='px-3 py-3 border-b-2'>ccc</h1>
                                <h1 className='px-3 py-3 border-b-2'>ccc</h1>
                                <h1 className='px-3 py-3 border-b-2'>ccc</h1>
                                <h1 className='px-3 py-3 border-b-2'>ccc</h1>
                                <h1 className='px-3 py-3 border-b-2'>ccc</h1>
                            </div>
                        </div>
                    )}
                    onClickOutside={() => setShowResult(false)}
                >
                    <div className='w-[300px] bg-white rounded-2xl flex justify-between'>
                        <input
                            value={searchValue}
                            type="text"
                            placeholder='Search'
                            spellCheck={false}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={() => setShowResult(true)}
                            className='h-10 p-4 ml-8 rounded-2xl outline-none placeholder:font-semibold font-semibold text-black input__search'
                        />
                        {!!searchValue && (
                            <button className='mr-4' onClick={handleClear}>
                                <AiFillCloseCircle />
                            </button>
                        )}
                    </div>
                </Tippy>
                <div className='flex items-center h-full w-[120px] justify-around'>
                    <h3 className='text-black font-semibold'>Hello user</h3>
                    <Tippy
                        onClickOutside={hide}
                        interactive='true'
                        visible={visible}
                        placement='bottom-end'
                        render={attrs => (
                            <div className="h-[100px] w-[140px] menu__items z-1" tabIndex="-1" {...attrs}>
                                {renderItems()}
                            </div>
                        )}
                    >
                        <div onClick={visible ? hide : show}>
                            <FiMenu className='text-2xl text-black hover:cursor-pointer' />
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>
    )
}

export default HeaderContent;
