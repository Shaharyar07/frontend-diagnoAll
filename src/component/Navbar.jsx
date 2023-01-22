import React from "react";
const Navbar = () => {
  return (
    <div className='navbar pt-4'>
      <div className='m-auto mr-0'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10'
              fill='#fff'
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
            className='menu menu-compact dropdown-content p-2 shadow  bg-gradient-to-r to-[#007474] from-red-600  rounded-box w-46'
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
    </div>
  );
};

export default Navbar;
