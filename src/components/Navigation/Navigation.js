import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Logo from '../../images/logo.png';

const Navigation = () => {
    return (
        <header className="text-gray-600 body-font bg-blue-300">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center font-medium">
                <HashLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={Logo} className="w-10 h-10" alt="Delwar Ahmed" />
                    <span className="ml-3 text-xl">Delwar Ahmed</span>
                </HashLink>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <HashLink smooth to="/#about" className="mr-5 hover:text-gray-900">About</HashLink>
                    <HashLink smooth to="/#projects" className="mr-5 hover:text-gray-900">Projects</HashLink>
                    <HashLink smooth to="/#skills" className="mr-5 hover:text-gray-900">Skills</HashLink>
                    <HashLink smooth to="/#blogs" className="mr-5 hover:text-gray-900">Blogs</HashLink>
                    <HashLink smooth to="/#contact" className="mr-5 hover:text-gray-900">Contact</HashLink>
                </nav>
                <a href="https://drive.google.com/file/d/1pDrdH5f2zm8qF1O-W7pWlTsKdsF-J1vM/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Resume
                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </a>
            </div>
        </header>
    );
};

export default Navigation;