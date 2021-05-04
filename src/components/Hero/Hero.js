import React from 'react';
import Typewriter from 'typewriter-effect';
import Work from '../../images/hero-image.png';

const Hero = () => {
    return (
        <section className="text-gray-600 body-font antialiased">
            <div className="container mx-auto h-2/3 flex px-8 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font font-roboto sm:text-2xl md:text-5xl mb-8 font-bold text-gray-900">Delwar Ahmed
                        <br className="hidden lg:inline-block" />
                        <span className="flex flex-row text-bold text-red-500 leading-relaxed">
                            <Typewriter options={{ strings: ['Web', 'Frontend Web', 'JavaScript'], autoStart: true, loop: true }} />
                            <p className="text-bold text-gray-900">Developer.</p>
                        </span>
                    </h1>

                    <div className="flex justify-center">
                        <button onClick={() => {
                            window.location.href = 'https://github.com/dahabib';
                            return null;
                        }} className="inline-flex text-white bg-red-500 border-0 justify-items-center py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Github</button>
                        <button onClick={() => {
                            window.location.href = 'https://linkedin.com/in/dahabib';
                            return null;
                        }} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            Linedin</button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center" alt="hero" src={Work} />
                </div>
            </div>

        </section>
    );
};

export default Hero;