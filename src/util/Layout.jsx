import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <section className="p-2">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
