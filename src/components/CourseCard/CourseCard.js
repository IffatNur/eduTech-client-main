import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({crs}) => {
    const {id,course,rating,img, details} = crs;
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl h-48" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{course}</h2>
            <p>{details.slice(0, 100) + "..."}</p>
            <div className="card-actions">
              <Link to={`${id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CourseCard;