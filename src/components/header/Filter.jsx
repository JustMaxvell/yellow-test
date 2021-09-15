import React from "react";

// ? Styles
import "./styles/filter.css";

export const Filter = ({isFilterOpen, setFilter, filter}) => {
  return (
    <div className={`filter-dropdown ${isFilterOpen ? 'active' : 'inactive'}`}>
      <form className="filter-dropdown__form" action="">
        <span>Date from </span>
        <input type="date" value={filter.from} placeholder="" onChange={e => {setFilter(prev => {return {...prev, from: e.target.value}})}}/>
        <span>Date to </span>
        <input type="date" value={filter.to} placeholder="" onChange={e => {setFilter(prev => {return {...prev, to: e.target.value}})}}/>
      </form>
    </div>
  )
}