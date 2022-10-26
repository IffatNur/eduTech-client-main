import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const details = useLoaderData();
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-14 bg-cyan-300">
          <div className="card-body text-center">
            <div className="card-actions justify-end "></div>
            <h1 className="text-3xl">Congratutations! </h1>
            <small>You have got premium access of the course below</small>
            <p>ID no : {details.id}</p>
            <p>
              <b>
                {details.code} : {details.course}
              </b>
            </p>
          </div>
        </div>
      </div>
    );
};

export default CheckOut;