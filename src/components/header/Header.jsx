import React from 'react';

import { Link } from 'react-router-dom';

import { NavBar } from './NavBar';
import { LogoIcon } from '../icons';

export const Header = () => {
  return (
    <header className="flex justify-between py-3">
      <Link className="flex group flex-col w-32 hover:" to={'/'}>
        <div className="flex flex-col items-center">
          <LogoIcon className={' group-hover:fill-indigo-500'} />
          <span className="mx-auto text-xl font-bold group-hover:text-indigo-500">
            Car Rental
          </span>
        </div>
      </Link>

      <NavBar />
    </header>
  );
};
