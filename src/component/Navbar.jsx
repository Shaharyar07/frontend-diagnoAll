import React from "react";

const Navbar = () => {
  return (
    <div className='navbar pt-4'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow  bg-[#25444a]  rounded-box w-52'
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-center'>
        <a className='btn btn-ghost text-4xl capitalize'>diagnoALL</a>
      </div>
      <div className='navbar-end'>
        <a
          href='#'
          className='inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm ring-1 ring-white/30 hover:ring-white/50'
        >
          Log in
        </a>
      </div>
    </div>
  );
};

export default Navbar;
