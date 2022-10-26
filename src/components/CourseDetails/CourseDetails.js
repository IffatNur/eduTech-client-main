import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaFileDownload } from "react-icons/fa";
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';



const CourseDetails = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content:()=> componentRef.current,
    documentTitle: 'Course-details',
    onAfterPrint: ()=> alert('Print success')
  })
    const singleCourse = useLoaderData();
    const {id, code, course, details, instructor, rating, img } = singleCourse;
    
    return (
      <div>
        <div className="navbar bg-primary text-white">
          <div className="flex-1">
            <button
              onClick={handlePrint}
              className="btn btn-ghost normal-case text-xl"
            >
              Download File{" "}
              <FaFileDownload className="text-error"></FaFileDownload>
            </button>
          </div>
        </div>
        <div className="card lg:card-side shadow-xl lg:w-3/4 mx-auto mt-24 bg-sky-200">
          <figure className="w-full">
            <img className="h-full" src={img} alt="Album" />
          </figure>
          <div className="card-body">
            <div ref={componentRef}>
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
            </div>
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
              <Link to={`/checkout/${id}`}>
                <button className="btn btn-primary">Get Premium Access</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseDetails ;