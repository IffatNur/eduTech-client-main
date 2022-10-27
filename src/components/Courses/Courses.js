import React from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    return (
      <div className="block md:flex">
        <div className="side-bar w-full md:w-3/12 pl-10 pt-10 bg-blue-900 text-cyan-100 lg:mr-28">
          <h3 className="text-2xl font-bold text-gray-300">COURSE DETAILS</h3>
          {courses.map((crs) => (
            <LeftNavbar key={crs.id} crs={crs}></LeftNavbar>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-5 ">
          {courses.map((crs) => (
            <CourseCard key={crs.id} crs={crs}></CourseCard>
          ))}
        </div>
      </div>
    );
};

export default Courses;