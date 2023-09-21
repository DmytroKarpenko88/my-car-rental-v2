import React from 'react';
import { Header } from './header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="container max-w-[1184px] p-0 mx-auto">
      <Header />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};
