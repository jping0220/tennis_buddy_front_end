import React from "react";
import { NavLink } from "react-router-dom";

export const RouterNavLink = ({ to, children }) => {
  return (
    <NavLink
      className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
      to={to}>
      {children}
    </NavLink>
  )
}