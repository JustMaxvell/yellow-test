import React, { useState } from "react";

// ? Styles
import "./styles/modal.css";

export const Modal = ({toggleModal, token, getJogs}) => {
  const [distance, setDistance] = useState('')
  const [time, setTime] = useState('')
  const [jogDate, setJogDate] = useState('')

  const onSave = async () => {
    if (distance && time && jogDate) {
      await fetch("https://jogtracker.herokuapp.com/api/v1/data/jog", {
        body: `date=${jogDate}&time=${time}&distance=${distance}`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
      })
      getJogs();
      toggleModal(false);
    } else {
      alert("All fields are required");
    } 
  } 

  return (
    <div className="modal-wrapper">
      <form className="modal" onSubmit={(e) => e.preventDefault()}>
        <div>
          <span>Distance</span>
          <input type="number" placeholder="km" value={distance} onChange={e => setDistance(e.target.value)}/>
        </div>
        <div>
          <span>Time</span>
          <input type="number" placeholder="min" value={time} onChange={e => setTime(e.target.value)}/>
        </div>
        <div>
          <span>Date</span>
          <input type="date" value={jogDate} onChange={e => setJogDate(e.target.value)}/>
        </div>
        <button className="save-btn" onClick={() => onSave()}>Save</button>
        <button className="close-btn" onClick={() => toggleModal(false)}><span></span><span></span></button>
      </form>
    </div>
  )
}