import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
      <div>
        {error && (
          <div className="flex justify-center mt-36">
            <div className='text-center'>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXOesOOOSWhzSev4dDBTsfNJr0WVQgf6rwA&usqp=CAU"
                alt="error"
              />
              <p className="text-3xl">{error.statusText}</p>
              <h1 className="text-6xl text-red-600 font-bold">{error.status}</h1>
            </div>
          </div>
        )}
      </div>
    );
};

export default ErrorPage;