import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaFileDownload } from "react-icons/fa";
import { createRef } from 'react';
import ReactToPdf from "react-to-pdf";
import { useContext } from 'react';



const CourseDetails = () => {
  const ref = createRef();
    const singleCourse = useLoaderData();
    const {id, code, course, details, instructor, rating, img } = singleCourse;
    console.log(singleCourse);
    return (
      <div>
        <div className="navbar bg-primary text-white">
          <div className="flex-1">
            <ReactToPdf targetRef={ref} filename="code-example.pdf">
              {({ toPdf }) => {
                <Link
                  onClick={toPdf}
                  className="btn btn-ghost normal-case text-xl"
                >
                  Download File{" "}
                  <FaFileDownload className="text-error"></FaFileDownload>
                </Link>;
              }}
            </ReactToPdf>
          </div>
        </div>
        <div className="card lg:card-side shadow-xl lg:w-3/4 mx-auto mt-24 bg-sky-200">
          <figure className="w-full">
            <img className="h-full" src={img} alt="Album" />
          </figure>
          <div ref={ref} className="card-body">
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
              <Link to="/checkout">
                <button className="btn btn-primary">Get Premium Access</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetails;