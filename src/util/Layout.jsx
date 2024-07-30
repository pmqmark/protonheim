import React from "react";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        
      </div>
      
        <Outlet />
      
      
    </div>
  );
};

export default Layout;
