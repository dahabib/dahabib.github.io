import React from 'react';
import { SiReact, SiRedux, SiJavascript, SiMongodb, SiFirebase, SiBootstrap, SiVisualstudiocode, SiTailwindcss, SiHtml5, SiCss3, SiGithub, SiNodeDotJs } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";

const Skills = () => {
    return (
        <section id="skills" className="bg-gray-900 text-white">
            <h1 className="text-6xl font-semibold text-center py-6">Skills</h1>
            <p className="text-2xl font-semibold text-center text-gray-300">These are the skills I have</p>
            <div className="flex flex-row flex-wrap content-center px-20 py-12 mx-auto">
                <div className="flex flex-col items-center p-4">
                    <div className="p-4 bg-yellow-200 rounded-full">
                        <SiReact className="w-20 h-20 p-2 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-2xl mt-4 text-center">React</h3>
                </div>
                
                <div className="flex flex-col items-center p-4">
                    <div className="p-4 bg-white rounded-full">
                        <SiRedux className="w-20 h-20 p-2 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-2xl mt-4 text-center">Redux</h3>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="p-4 bg-gray-700 rounded-full">
                        <SiJavascript className="w-20 h-20 p-2 text-yellow-400" />
                    </div>
                    <h3 className="font-semibold text-2xl mt-4 text-center">JavaScript</h3>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="p-4 bg-blue-200 rounded-full">
                        <SiHtml5 className="w-20 h-20 text-red-400 p-2" />

                    </div>
                    <h3 className="font-semibold text-2xl mt-4 text-center">HTML5</h3>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="p-4 bg-indigo-200 rounded-full">
                        <SiCss3 className="w-20 h-20 p-2 text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-2xl mt-4 text-center">CSS3</h3>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="p-4 bg-purple-200 rounded-full">
                        <SiTailwindcss className="w-20 h-20 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-2xl mt-4 text-center">Tailwind CSS</h3>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="p-4 bg-purple-800 rounded-full">
                        <SiBootstrap className="w-20 h-20 p-2 text-white" />
                    </div>
                    <h3 className="font-semibold text-2xl mt-4 text-center">Bootstrap</h3>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="p-4 bg-yellow-300 rounded-full">
                        <SiFirebase className="w-20 h-20 text-yellow-500 p-2" />
                    </div>
                    <h3 className="font-semibold text-2xl mt-4 text-center">Firebase</h3>
                </div>


                <div className="flex flex-col items-center p-4">
                    <div className="p-4 bg-pink-200 rounded-full">
                        <VscJson className="w-20 h-20 text-purple-500 p-2" />
                    </div>
                    <h3 className="font-semibold text-2xl mt-4 text-center">JSON</h3>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="p-4 bg-pink-200 rounded-full">
                        <SiNodeDotJs className="w-20 h-20 text-green-500 p-2" />
                    </div>
                    <h3 className="font-semibold text-2xl mt-4 text-center">Node.js</h3>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="p-4 bg-pink-200 rounded-full">
                        <SiMongodb className="w-20 h-20 text-green-500 p-2" />
                    </div>
                    <h3 className="font-semibold text-2xl mt-4 text-center">Mongo DB</h3>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="p-4 bg-pink-200 rounded-full">
                        <SiGithub className="w-20 h-20 text-gray-700 p-2" />
                    </div>
                    <h3 className="font-semibold text-2xl mt-4 text-center">Git</h3>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="p-4 bg-pink-200 rounded-full">
                        <FaCcStripe className="w-20 h-20 text-blue-500 p-2" />
                    </div>
                    <h3 className="font-semibold text-2xl mt-4 text-center">Stripe</h3>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="p-4 bg-pink-200 rounded-full">
                        <SiVisualstudiocode className="w-20 h-20 text-blue-400 p-2" />
                    </div>
                    <h3 className="font-semibold text-2xl mt-4 text-center">VS Code</h3>
                </div>
            </div>
        </section>
    );
};

export default Skills;