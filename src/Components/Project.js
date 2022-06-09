import React from 'react';

const Project = ({project}) => {
    return (
        <div class="card w-96 bg-base-200 shadow-2xl mb-5 mx-auto mt-10">
        <figure class="px-10 pt-10">
          <img src={project.img} alt="Shoes" class="rounded-2xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-bold">{project.name}</h2>
          <p>{project.description}</p>
          <div class="card-actions">
            <button class="btn btn-primary">More Information</button>
          </div>
        </div>
      </div>
    );
};

export default Project;