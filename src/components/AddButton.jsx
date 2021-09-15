import React from 'react'

// ? Components
import icon from "../assets/images/add.svg"

// ? Styles
import "./styles/add-button.css"

export const AddButton = ({toggleModal}) => {
  return (
    <div className="jogs__add-button" onClick={() => toggleModal(true)}>
      <img src={icon} alt="add-button" />
    </div>
  )
}