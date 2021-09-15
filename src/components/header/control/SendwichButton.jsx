import React from "react";

// ? Styles
import "./styles/sendwich-button.css";

export const SendwichButton = ({sendwichMenuOpen, setSendwichMenuOpen}) => {
  return (
    <div className={`header__control__sendwich-button ${sendwichMenuOpen ? "active" : "inactive"}`} onClick={()=> setSendwichMenuOpen((prev) => !prev)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}