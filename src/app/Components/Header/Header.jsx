"use client";

import React, { useState } from "react";
import HeaderRU from "./HeaderRU"; // Import HeaderRU component
import HeaderEN from "./HeaderEN"; // Import HeaderEN component

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("RU");

  return (
    <header className="fixed top-0 left-0 z-50 w-full max-w-[390px] md:left-1/2 md:-translate-x-1/2 md:max-w-full">
      <div className="relative flex items-center justify-between px-4 py-3 md:py-4 md:px-6 lg:px-8 bg-white md:mx-auto md:my-3 md:max-w-7xl md:rounded-full">
        <a href="/">
          <div className="flex-shrink-0">
            <svg
              width="53"
              height="20"
              viewBox="0 0 53 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.3749 7.82301V16.9956C19.4682 17.8168 20.2483 19.4591 22.6222 19.4591H26.0375V17.6115H22.6222C22.137 17.6115 21.1665 17.3428 21.1665 16.2678V7.82301H25.1975V5.80742H21.1665V2.4386H19.3749V5.80742H16.9111V7.82301H19.3749Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M46.3378 7.82301V16.9956C46.4311 17.8168 47.2112 19.4591 49.5851 19.4591H53.0004V17.6115H49.5851C49.0999 17.6115 48.1294 17.3428 48.1294 16.2678V7.82301H52.1603V5.80742H48.1294V2.4386H46.3378V5.80742H43.874V7.82301H46.3378Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0H2.28312L7.5579 9.21119L12.9364 0H15.2733L8.58137 11.4943H6.29825L0 0ZM8.5826 11.4943H6.30332V19.4591H8.5826V11.4943Z"
                fill="#38BFF2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.9629 0H29.246L34.5208 9.21119L39.8993 0H42.2362L35.5443 11.4943H33.2611L26.9629 0ZM35.5455 11.4943H33.2662V19.4591H35.5455V11.4943Z"
                fill="#F15525"
              />
            </svg>
          </div>
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        <nav className="hidden md:flex md:items-center md:space-x-8">
          {language === "RU" ? (
            <HeaderRU /> 
          ) : (
            <HeaderEN /> 
          )}
          <button
            onClick={() => setLanguage(language === "RU" ? "EN" : "RU")}
            className="text-sm font-sans text-[#22253B] hover:text-gray-900"
          >
            {language === "RU" ? "RU" : "EN"}
          </button>{" "}
        </nav>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-sm font-sans text-[#22253B] hover:text-gray-900 hover:bg-gray-50"
          >
            Чему вы научитесь
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-sm font-sans text-[#22253B] hover:text-gray-900 hover:bg-gray-50"
          >
            Процесс обучения
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-sm font-sans text-[#22253B] hover:text-gray-900 hover:bg-gray-50"
          >
            Контакты
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
