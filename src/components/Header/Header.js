import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaErlang } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
  const { user, logOut,theme, toggleTheme } = useContext(AuthContext);
  const handleLogout = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error));
  }
    return (
      <div className="w-full">
        <div className="home-header navbar bg-base-100 bg-gradient-to-r from-blue-900 via-teal-500 to-blue-900 ">
          <div className="flex-1">
            <h1 className="normal-case text-3xl font-bold text-cyan-200 flex items-center">
              <FaErlang></FaErlang> eduTech
            </h1>
          </div>
          <div className="flex-none sm:invisible md:visible">
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
              <li tabIndex={0} className="sm:visible md:hidden">
                <Link className="text-cyan-200 mx-auto">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul style={{zIndex: 1}} className="p-2 bg-cyan-300">
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/courses">COURSES</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/blog">BLOG</Link>
                  </li>
                  <li>
                    <Link to="/login">LOGIN</Link>
                  </li>
                  <li>
                    <Link to="/register">REGISTER</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="text-yellow-500">
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
              {user && user.uid ? (
                <>
                  <ul>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="text-yellow-500"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                  <div
                    className="dropdown dropdown-end tooltip tooltip-left"
                    data-tip={
                      user.displayName ? user.displayName : "Name Not Found"
                    }
                  >
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full ">
                        {user?.photoURL ? (
                          <img src={user.photoURL} alt="avatar" />
                        ) : (
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBRb4EBYSRHufb7pZSuOEp_EmoLmU5aS_TxeekHjnw2_8TBYL6tOblzGjydQrtW7IEQA&usqp=CAU"
                            alt=""
                          />
                        )}
                      </div>
                    </label>
                  </div>
                </>
              ) : (
                <>
                  <li className="hover:text-yellow-400">
                    <Link to="/login">LOGIN</Link>
                  </li>
                  <li className="hover:text-yellow-400">
                    <Link to="/register">REGISTER</Link>
                  </li>
                </>
              )}
              <ReactSwitch
                onChange={toggleTheme}
                className="flex items-center justify-center mx-3 mt-3"
                checked={theme === "light"}
              ></ReactSwitch>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;