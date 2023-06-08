import React from "react";
import { NavLink } from "react-router-dom";
import "./menuuu.css";

export default function Layout() {
  return (
    <>
  
      <NavLink activeClassName="active_class" exact to="/">Home</NavLink>

      <NavLink activeClassName="active_class" exact to="/about">About</NavLink>

      <NavLink activeClassName="active_class" exact to="/contact">Contact</NavLink>
      
 
    </>
  );
}
