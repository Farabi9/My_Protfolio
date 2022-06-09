import React from 'react';
import img from '../Images/20211128022202_IMG_7338_50_1_50.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
        <img class="mask mask-hexagon-2 w-96" src={img} alt=''/>
          <div>
            <h1 class="text-5xl font-bold">Front-End Developer</h1>
            <p class="py-6">I am Kamrul Hasan Rifat. A Front-end Web Developer. I worked with React.js. <br /> Completed Few projects On React.js. I have knowledged on Back-end also. Compledet few projects <br /> with node.js, express.js, mongoDB</p>
            
          </div>
        </div>
      </div>
    );
};

export default Banner;