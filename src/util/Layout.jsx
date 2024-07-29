import React from "react";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        
      </div>
      <section className="mt-16">
        <Outlet />
      </section>
      
    </div>
  );
};

export default Layout;
