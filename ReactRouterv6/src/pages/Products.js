import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div>
        <input placeholder="Search Products" />
      </div>
      <nav>
        <Link to={"featured"}>Features</Link>
        <Link to={"new"}>New</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
