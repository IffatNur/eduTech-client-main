import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = ({crs}) => {
    return (
      <div>
        <NavLink to={`${crs.id}`}>
          <p className="text-xl font-semibold hover:text-yellow-500">
            {crs.course}
          </p>
        </NavLink>
      </div>
    );
};

export default LeftNavbar;