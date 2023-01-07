import React from "react";
const Navbar = () => {
  return (
    <div className='navbar pt-4'>
      <div className='navbar-start z-10 hidden md:block'>
        {/* display social media icon */}
        <a className=' btn btn-ghost  btn-circle'>
          <svg
            width='40'
            height='40'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M1 4.5C1 1.87479 1.02811 1 4.5 1C7.97189 1 8 1.87479 8 4.5C8 7.12521 8.01107 8 4.5 8C0.988927 8 1 7.12521 1 4.5Z'
              stroke='#FFFFFF'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M12 4.5C12 1.87479 12.0281 1 15.5 1C18.9719 1 19 1.87479 19 4.5C19 7.12521 19.0111 8 15.5 8C11.9889 8 12 7.12521 12 4.5Z'
              stroke='#FFFFFF'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M1 15.5C1 12.8748 1.02811 12 4.5 12C7.97189 12 8 12.8748 8 15.5C8 18.1252 8.01107 19 4.5 19C0.988927 19 1 18.1252 1 15.5Z'
              stroke='#FFFFFF'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M12 15.5C12 12.8748 12.0281 12 15.5 12C18.9719 12 19 12.8748 19 15.5C19 18.1252 19.0111 19 15.5 19C11.9889 19 12 18.1252 12 15.5Z'
              stroke='#FFFFFF'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </a>
      </div>
      <div className='navbar-center'>
        <a className='btn btn-ghost text-4xl capitalize bg-gradient-to-r bg-transparent  to-[#007474] from-red-600'>
          DiagnoALL
        </a>
      </div>
      <div className='navbar-end mx-5'>
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
