import React from "react";

// ? Components
import { MenuItem } from "./MenuItem"

const MenuItems = [
  {title: "jogs", path: "/jogs", dropdown: false},
  {title: "info", path: "/info", dropdown: false},
  {title: "contact us", path: "/contact-us", dropdown: false}, 
]

export const Menu = () => {
  return (
    <nav className="header__control__menu">
      <ul>
        {MenuItems.map( (item, index) => <MenuItem key={index} path={item.path} title={item.title} dropdown={item.dropdown} />)}
      </ul>
    </nav>
  )
}