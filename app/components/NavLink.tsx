import * as React from "react";
import { NavLinkProps } from "../types";

export const NavLink: React.FC<NavLinkProps> = ({ label }) => (
  <div className="cursor-pointer" role="button" tabIndex={0}>
    {label}
  </div>
);
