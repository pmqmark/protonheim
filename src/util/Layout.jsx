import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Header />
      </div>
      <section className="mt-16">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
