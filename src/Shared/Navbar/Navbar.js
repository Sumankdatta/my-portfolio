import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems =
        <>
            <li >
            <Link className='hover:text-red-500' to='/'>Home</Link>
            <Link className='hover:text-red-500' to='/about'>About</Link>
            <Link className='hover:text-red-500'>Portfolio</Link>
            <Link className='hover:text-red-500'>Contact</Link>
            </li>
        </>
    return (
        <div className="navbar bg-teal-900 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-2xl text-white">Suman K Datta</Link>
        </div>
        <div className="hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-white me">
           {menuItems}
          </ul>
        </div>
        <div className="navbar-end ">
        <a className='w-32 hidden lg:block border px-5 py-2 text-white text-xl mr-3 mt-5 hover:bg-gray-500 flex items-center' href="resume/dat.pdf" target="_blank"> Resume </a>
        </div>
      </div>
    );
};

export default Navbar;