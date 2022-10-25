import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const CourseDetails = () => {
    const singleCourse = useLoaderData();
    const { code, course, details, instructor, rating, img } = singleCourse;
    console.log(singleCourse);
    return (
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl lg:w-3/4 mx-auto mt-24 bg-sky-200">
          <figure className="w-full">
            <img className="h-full" src={img} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <b>
                {code + " : "} <i>{course}</i>
              </b>{" "}
            </h2>
            <p>
              <i>Details :</i> {details}
            </p>
            <p>
              <b>Instructor : {instructor}</b>
            </p>
            <div className="card-actions justify-between">
              <span className="flex text-yellow-400 items-center">
                <span className="text-black">
                  <small>Rating: {rating}</small>
                </span>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStarHalfAlt></FaStarHalfAlt>
              </span>
              <button className="btn btn-primary">Get Premium Access</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetails;