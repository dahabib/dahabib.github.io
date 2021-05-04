import React from 'react';
import { SiGithub } from 'react-icons/si';
import { BsDisplayFill } from "react-icons/bs";


const Projects = () => {

    return (
        <section id="projects" className="text-gray-600 body-font bg-yellow-200">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-6xl font-semibold text-center py-6">Recent Projects</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img alt="gallery" className="absolute inset-0 w-full object-cover object-center" src="https://i.ibb.co/TL6Vc2w/tourist-hub.png" />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 rounded-md bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">MERN Stack</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Tourist Hub</h1>
                                <p className="leading-relaxed">A tour operator website. Customers can book packages, review services and keep track of bookings. Admin can manage bookings, customers, users, packages from dashboard.</p>
                                <div className="flex justify-between pt-4">
                                    <a href="https://github.com/dahabib/tourist-hub" target="_blank" rel="noreferrer" className="inline-flex items-center ring-2 rounded-md bg-red-400 px-3">
                                        <SiGithub className="w-10 h-10 text-gray-700 px-1 animate-pulse" />
                                        <span className="font-semibold">Code</span>
                                    </a>
                                    <a href="https://tourist-hub-bd.web.app" target="_blank" rel="noreferrer" className="inline-flex items-center ring-2 rounded-md bg-red-400 px-3">
                                        <span className="font-semibold">Demo</span>
                                        <BsDisplayFill className="w-10 h-10 text-gray-700 px-1 animate-pulse" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img alt="gallery" className="absolute inset-0 w-full object-cover object-center" src="https://i.ibb.co/WDy5wm4/sbl-shop.png" />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 rounded-md bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">MERN, e-Commerce</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">SBL Shop</h1>
                                <p className="leading-relaxed">An e-Commerce website. Customers can place order, keep track of order. Admin can manage orders, users and inventory</p>
                                <div className="flex justify-between pt-2">
                                    <a href="https://github.com/dahabib/sbl-shop" target="_blank" rel="noreferrer" className="inline-flex items-center ring-2 rounded-md bg-red-400 px-3">
                                        <SiGithub className="w-10 h-10 text-gray-700 px-1 animate-pulse" />
                                        <span className="font-semibold">Code</span>
                                    </a>
                                    <a href="https://sbl-shop.firebaseapp.com/" target="_blank" rel="noreferrer" className="inline-flex items-center ring-2 rounded-md bg-red-400 px-3">
                                        <span className="font-semibold">Demo</span>
                                        <BsDisplayFill className="w-10 h-10 text-gray-700 px-1 animate-pulse" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co/KGykg6f/moons-cuisine.png" />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 rounded-md bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">React</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Moons cuisine</h1>
                                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <div className="flex justify-between pt-2">
                                    <a href="https://github.com/dahabib/moons-cuisine" target="_blank" rel="noreferrer" className="inline-flex items-center ring-2 rounded-md bg-red-400 px-3">
                                        <SiGithub className="w-10 h-10 text-gray-700 px-1 animate-pulse" />
                                        <span className="font-semibold">Code</span>
                                    </a>
                                    <a href="https://dahabib.github.io/moons-cuisine/" target="_blank" rel="noreferrer" className="inline-flex items-center ring-2 rounded-md bg-red-400 px-3">
                                        <span className="font-semibold">Demo</span>
                                        <BsDisplayFill className="w-10 h-10 text-gray-700 px-1 animate-pulse" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img alt="gallery" className="absolute inset-0 w-full object-fill object-center" src="https://i.ibb.co/YXbnFqT/fancy-slider.png" />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 rounded-md bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">Vanila JS</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Fancy Slider</h1>
                                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <div className="flex justify-between pt-2">
                                    <a href="https://github.com/dahabib/fancy-slider" target="_blank" rel="noreferrer" className="inline-flex items-center ring-2 rounded-md bg-red-400 px-3">
                                        <SiGithub className="w-10 h-10 text-gray-700 px-1 animate-pulse" />
                                        <span className="font-semibold">Code</span>
                                    </a>
                                    <a href="https://dahabib.github.io/fancy-slider/" target="_blank" rel="noreferrer" className="inline-flex items-center ring-2 rounded-md bg-red-400 px-3">
                                        <span className="font-semibold">Demo</span>
                                        <BsDisplayFill className="w-10 h-10 text-gray-700 px-1 animate-pulse" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 rounded-md bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">THE SUBTITLE</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <div className="flex justify-between pt-2">
                                    <a href="https://" target="_blank" rel="noreferrer" className="inline-flex items-center ring-2 rounded-md bg-red-400 px-3">
                                        <SiGithub className="w-10 h-10 text-gray-700 px-1 animate-pulse" />
                                        <span className="font-semibold">Code</span>
                                    </a>
                                    <a href="https://" target="_blank" rel="noreferrer" className="inline-flex items-center ring-2 rounded-md bg-red-400 px-3">
                                        <span className="font-semibold">Demo</span>
                                        <BsDisplayFill className="w-10 h-10 text-gray-700 px-1 animate-pulse" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 rounded-md bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">THE SUBTITLE</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <div className="flex justify-between pt-2">
                                    <a href="https://" target="_blank" rel="noreferrer" className="inline-flex items-center ring-2 rounded-md bg-red-400 px-3">
                                        <SiGithub className="w-10 h-10 text-gray-700 px-1 animate-pulse" />
                                        <span className="font-semibold">Code</span>
                                    </a>
                                    <a href="https://" target="_blank" rel="noreferrer" className="inline-flex items-center ring-2 rounded-md bg-red-400 px-3">
                                        <span className="font-semibold">Demo</span>
                                        <BsDisplayFill className="w-10 h-10 text-gray-700 px-1 animate-pulse" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;