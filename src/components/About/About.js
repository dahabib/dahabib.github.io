import React from 'react';
import Photo from '../../images/delwar.jpg';

const About = () => {
    return (
        <section id="about" className="text-gray-600 body-font bg-yellow-300">
            <div className="px-5 py-12 md:flex-row text-center">
                <h1 className="text-center font-roboto sm:text-4xl md:text-5xl mb-2 font-bold">About me...</h1>
            </div>
            <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded-full hover: animate-pulse " alt="hero" src={Photo} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-8 font-bold text-gray-900">Short brief
                        <br className="hidden lg:inline-block" />about me.
                    </h1>
                    <p className="mb-8 leading-relaxed text-2xl antialiased font-Roboto font-semibold">
                        Hello! I'm Delwar Ahmed, love to code and create stunning staffs. I feel happy making Web based solution. I've done some projects already. I'm used to build with modern web technologies and frameworks.
                    </p>
                    <div className="flex justify-center">
                        <a href="https://drive.google.com/file/d/1pDrdH5f2zm8qF1O-W7pWlTsKdsF-J1vM/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            MY RESUME!</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;