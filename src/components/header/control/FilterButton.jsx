import React from "react";

// ? Compponents
import { FilterIcon } from "../../../assets/icons/FilterIcon";

// ? Styles
import "../styles/filter.css";

export const FilterButton = ({toggleFilter, isFilterOpen}) => {
  return (
    <div className={`header__control__filter ${!isFilterOpen ? "active" : "inactive"}`} onClick={()=> toggleFilter((prev) => !prev)}>
      <FilterIcon color={!isFilterOpen ? "#fff" : "#62AA14"} />
    </div>
  )
}