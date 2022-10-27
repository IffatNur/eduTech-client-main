import React from 'react';
import { Link } from 'react-router-dom';
import '../../contexts/AuthContext.css';

const Footer = () => {
    return (
      <div className='mt-32'>
        <div className="grid grid-rows-2 ">
          <div className="grid grid-cols-2 gap-2 text-yellow-500 font-bold footer-container">
            <div className="ml-10 my-5">
              <p> Contact info</p>
              <small>Address : Chittagong</small>
              <br />
              <small>Contact : 01xxxxxxx</small>
              <br />
              <small>Email : eduTech@tech.com</small>
            </div>
            <div className="ml-10 my-5">
              <p>Other important links</p>
              <Link to="/blog">
                <small>Blog</small>
              </Link>
              <br />
              <Link to="/faq">
                <small>FAQ</small>
              </Link>
              <br />
              <Link to="/register">
                <small>Register</small>
              </Link>
            </div>
          </div>
          <div className="text-center text-teal-500 font-bold">
            <small>Copyright @ 2022 eduTech</small>
          </div>
        </div>
      </div>
    );
};

export default Footer;