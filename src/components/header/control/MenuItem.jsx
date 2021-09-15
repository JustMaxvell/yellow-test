import React from "react";
import { NavLink } from "react-router-dom";

export const MenuItem = ({title, path, dropdown=false, setSendwichMenuOpen, mobile}) => {
  return <NavLink to={path} className="header__control__menu__item Text-Style-2" onClick={() => mobile && setSendwichMenuOpen(false)}>{title.toUpperCase()}</NavLink>
}