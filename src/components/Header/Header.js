import React from 'react';
import { useContext } from 'react';
import { FaErlang, FaSnowman } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogout = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error));
  }
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
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="toggle toggle-accent"
                      checked
                    />
                  </label>
                </div>
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
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;