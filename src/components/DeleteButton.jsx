import React from 'react'

// ? Styles
import "./styles/delete-button.css"

export const DeleteButton = ({id, deleteJog, userId}) => {
  return (
    <div className="delete-button" onClick={() => deleteJog(userId, id)}>
      <span></span>
      <span></span>
    </div>
  )
}