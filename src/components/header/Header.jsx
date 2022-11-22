import Tippy from '@tippyjs/react/headless';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { MdAccountCircle } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
import { AiFillCloseCircle } from 'react-icons/ai';
import useDebounce from '../../hook/useDebounce';
import './header.scss';


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
        overview: 'Begin: Environment zzzzzzzzz',
        contents: [
            { content: 'introduction' },
            { content: 'con chim 123' }
        ],
        check: false,
    },
    {
        id: 4,
        name: 'Unit 4',
        overview: 'Begin: Environment yyyyyyyyyy',
        contents: [
            { content: 'introduction' },
            { content: 'concept for lol' }
        ],
        check: false,
    },
]

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

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);

    const debounce = useDebounce(searchValue, 1000);

    useEffect(() => {
        const found = listContentUnit.filter(p => p.name === debounce || p.overview === debounce || p.contents.find(y => y.content === debounce));
        setSearchResult(found.map(p => p));
    }, [debounce]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
    }

    const [visible, setVisible] = useState(false);

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
                <Link to='/home'><h1 className='text-xl font-medium text-black'>English Web Quiz</h1></Link>
                <Tippy
                    visible={searchResult.length > 0 && showResult}
                    interactive
                    render={(attrs) => (
                        <div className='w-[300px]' tabIndex="-1" {...attrs}>
                            <div className='wrapper'>
                                {
                                    searchResult.map((item) => (
                                        <Link to={`/unit/${item.id}`}>
                                            <div className='px-3 py-3 border-b-2 wrapper__item'>
                                                <h1>{item.name}</h1>
                                                <div>{item.overview}</div>
                                            </div>
                                        </Link>
                                    ))
                                }
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
                            <div className="h-[100px] w-[140px] menu__items z-1 border-2" tabIndex="-1" {...attrs}>
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

export default Header;
