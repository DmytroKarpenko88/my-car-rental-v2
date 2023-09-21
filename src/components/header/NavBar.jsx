import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className=" py-4">
      <div className="mx-auto flex justify-between items-center">
        <ul className="flex space-x-4 text-xl gap-2">
          <li>
            <NavLink
              className="py-[14px] px-[44px] border-b-2  hover:border-indigo-500  hover:text-indigo-500"
              to={'/'}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="py-[14px] px-[44px]  border-b-2   hover:border-indigo-500  hover:text-indigo-500 "
              to={'/catalog'}
            >
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink
              className="py-[14px] px-[44px]  border-b-2   hover:border-indigo-500  hover:text-indigo-500"
              to={'/favorites'}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
