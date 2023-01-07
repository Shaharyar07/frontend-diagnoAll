import React from "react";

const Hero = () => {
  return (
    <div className='float-left md:float-right mt-[150px] w-full md:w-1/3 '>
      <h1 className='text-6xl leading font-bold'>
        Accelerating the Research Workflows from
        <span className='md:text-transparent  bg-clip-text text-white bg-gradient-to-r to-red-700 from-red-400'>
          {" "}
          Discovery to Clinic with ML Platform
        </span>{" "}
      </h1>
    </div>
  );
};

export default Hero;
