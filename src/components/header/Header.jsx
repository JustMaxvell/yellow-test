import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// ? Components
import { Control } from "./control/Control";
import { Filter } from "./Filter";
import { Logo } from "../../assets/icons/Logo"

// ? Styles
import "./styles/header.css";

export const Header = ({ authorized, jogs, setFilter, filter, sendwichMenuOpen, setSendwichMenuOpen }) => {
  const [isFilterOpen, toggleFilter] = useState(false);

  let location = useLocation();

  return (
    <>
      <header className="header">
        <Logo  className="logo" color={"#fff"} />
        {authorized && <Control toggleFilter={toggleFilter} isFilterOpen={isFilterOpen} jogs={jogs} sendwichMenuOpen={sendwichMenuOpen} setSendwichMenuOpen={setSendwichMenuOpen}/>}
      </header>
      {location.pathname === "/jogs" && jogs.length > 0 && <Filter isFilterOpen={isFilterOpen} setFilter={setFilter} filter={filter}/>}
    </>
  );
};
