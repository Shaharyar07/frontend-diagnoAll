import React from "react";
import heroimg from "../assets/heroimg.png";
const Hero = () => {
  return (
    <div className='hero min-h-screen '>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div>
          <h1 className='text-5xl font-bold'>Box Office News!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className='inline-block rounded-lg px-5 py-3 text-sm font-semibold leading-6  shadow-sm ring-1 ring-white/30 hover:ring-white/50'>
            Get Started
          </button>
        </div>
        <img src={heroimg} className=' opacity-90' />
      </div>
    </div>
  );
};

export default Hero;
