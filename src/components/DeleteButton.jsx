import React from 'react'

// ? Styles
import "./styles/delete-button.css"

export const DeleteButton = ({id, deleteJog}) => {
  return (
    <div className="delete-button" onClick={() => deleteJog(id)}>
      <span></span>
      <span></span>
    </div>
  )
}