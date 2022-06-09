import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() =>{
        fetch('project.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div id='projects'>
            <h2 className='text-4xl font-sans font-bold'>
                Projects
            </h2>
           <div className='flex grid lg:grid-cols-2 sm:grid-cols-1'>
           {
                projects.map(project => <Project
                key={project._id}
                project={project}
                ></Project>)
            }
           </div>
        </div>
    );
};

export default Projects;