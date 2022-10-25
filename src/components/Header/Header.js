import React from 'react';
import { FaErlang } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <div className="navbar bg-base-100 bg-gradient-to-r from-blue-900 via-teal-500 to-blue-900">
          <div className="flex-1">
            <h1 className="normal-case text-3xl font-bold text-cyan-200 flex items-center">
              <FaErlang></FaErlang> eduTech
            </h1>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0 text-white ">
              <li className="hover:text-yellow-400">
                <Link to="/">HOME</Link>
              </li>
              <li className="hover:text-yellow-400">
                <Link to="/courses">COURSES</Link>
              </li>
              <li className="hover:text-yellow-400">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="hover:text-yellow-400">
                <Link to="/blog">BLOG</Link>
              </li>
              <li className="hover:text-yellow-400">
                <Link to="/toggle">TOGGLE</Link>
              </li>
              <li className="hover:text-yellow-400">
                <Link to="/login">LOGIN</Link>
              </li>
              <li className="hover:text-yellow-400">
                <Link to="/register">REGISTER</Link>
              </li>
            </ul>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://i.pinimg.com/736x/9d/97/3e/9d973e10d026bd0359062439989b8eaf.jpg"
                    alt="avatar"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;