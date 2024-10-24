import React from 'react';

const Header = () => {
    return (
        <header className='flex items-center justify-between m-3 mx-80 px-5 text-2xl bg-white h-14 rounded-full'>

        <div className='header-logo'>
            <svg width="53" height="20" viewBox="0 0 53 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3749 7.82301V16.9956C19.4682 17.8168 20.2483 19.4591 22.6222 19.4591H26.0375V17.6115H22.6222C22.137 17.6115 21.1665 17.3428 21.1665 16.2678V7.82301H25.1975V5.80742H21.1665V2.4386H19.3749V5.80742H16.9111V7.82301H19.3749Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.3378 7.82301V16.9956C46.4311 17.8168 47.2112 19.4591 49.5851 19.4591H53.0004V17.6115H49.5851C49.0999 17.6115 48.1294 17.3428 48.1294 16.2678V7.82301H52.1603V5.80742H48.1294V2.4386H46.3378V5.80742H43.874V7.82301H46.3378Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H2.28312L7.5579 9.21119L12.9364 0H15.2733L8.58137 11.4943H6.29825L0 0ZM8.5826 11.4943H6.30332V19.4591H8.5826V11.4943Z" fill="#38BFF2"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9629 0H29.246L34.5208 9.21119L39.8993 0H42.2362L35.5443 11.4943H33.2611L26.9629 0ZM35.5455 11.4943H33.2662V19.4591H35.5455V11.4943Z" fill="#F15525"/>
            </svg>  
        </div>

        <div className='header-nav flex items-center gap-1.5'>
            <a href="#" class='p-4 font-sans text-[#22253B] font-normal text-sm'> Чему вы научитесь </a>
            <a href="#" class='p-4 font-sans text-[#22253B] font-normal text-sm'> Процесс обучения </a>
            <a href="#" class='p-4 font-sans text-[#22253B] font-normal text-sm'> Контакты</a>
        </div>

        </header>
        );
};

export default Header;
