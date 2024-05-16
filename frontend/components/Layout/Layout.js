import React from 'react';
import Sidebar from '../Home/Sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Sidebar />
    </div>
  );
};

export default Layout;
