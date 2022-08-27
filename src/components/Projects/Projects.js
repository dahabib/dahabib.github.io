import React from 'react';
import data from './data';
import Project from './Project';


const Projects = () => {

    return (
        <section id="projects" className="text-gray-600 body-font bg-yellow-200">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="text-6xl font-semibold text-center py-6">Recent Projects</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        data.map(project => <Project project={project} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;