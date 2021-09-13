import React from "react";

// ? Components
  import { Logo } from "../assets/icons/Logo";
  import { SendwichButton } from "./header/control/SendwichButton";
  import { MenuItem } from "../components/header/control/MenuItem"

// ? Styles
import "./styles/sendwich-menu.css";

const MenuItems = [
  {title: "jogs", path: "/jogs", dropdown: false},
  {title: "info", path: "/info", dropdown: false},
  {title: "contact us", path: "/contact-us", dropdown: false}, 
]

export const SendwichMenu = ({sendwichMenuOpen, setSendwichMenuOpen}) => {
  return (
    <div className="sendwich-menu">
      <div className="sendwich-menu__header">
        <Logo color={"#7ed321"} />
        <SendwichButton sendwichMenuOpen={sendwichMenuOpen} setSendwichMenuOpen={setSendwichMenuOpen}/>
      </div>
      <ul className="sendwich-menu__control">
        {MenuItems.map( (item, index) => <MenuItem key={index} path={item.path} title={item.title} dropdown={item.dropdown} setSendwichMenuOpen={setSendwichMenuOpen} mobile/>)}
      </ul>
    </div>
  )
}