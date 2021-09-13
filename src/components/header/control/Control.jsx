import React from "react";
import { useLocation } from "react-router-dom";

// ? Components
import { Menu } from "./Menu";
import { FilterButton } from "./FilterButton";
import { SendwichButton } from "./SendwichButton";

// ? Styles
import "./styles/control.css";

export const Control = ({toggleFilter, isFilterOpen, jogs, sendwichMenuOpen, setSendwichMenuOpen}) => {
  let location = useLocation();

  return (
    <div className="header__control">
      <Menu />
      {location.pathname === "/jogs" && jogs.length > 0 && <FilterButton toggleFilter={toggleFilter} isFilterOpen={isFilterOpen}/>}
      <SendwichButton sendwichMenuOpen={sendwichMenuOpen} setSendwichMenuOpen={setSendwichMenuOpen}/>
    </div>
  );
};
