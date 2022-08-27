import React from 'react';
import { SiGithub } from 'react-icons/si';
import { BsDisplayFill } from "react-icons/bs";

export default function Project(props) {
    const { stack, title, image, description, code, demo } = props.project;
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-8">
        <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full object-cover object-center" src={image} />
            <div className="px-12 py-12 relative z-10 w-full border-2 border-gray-400 rounded-md bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-lg title-font font-bold text-red-500 mb-1">{stack}</h2>
                <h1 className="title-font text-xl font-bold text-gray-900 mb-3">{title}</h1>
                <p className="leading-relaxed text-base">{description}</p>
                <div className="flex justify-between pt-4">
                    <a href={code} target="_blank" rel="noreferrer" className="inline-flex items-center ring-2 rounded-md bg-red-400 px-3">
                        <SiGithub className="w-10 h-10 text-gray-700 px-1 animate-pulse" />
                        <span className="font-semibold">Code</span>
                    </a>
                    <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center ring-2 rounded-md bg-red-400 px-3">
                        <span className="font-semibold">Demo</span>
                        <BsDisplayFill className="w-10 h-10 text-gray-700 px-1 animate-pulse" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
