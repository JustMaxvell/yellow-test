import React from 'react';
import moment from "moment";

// ? Components
import icon from "../assets/images/icon.svg"
import { DeleteButton } from "../components/DeleteButton"

// ? Styles
import "./styles/jog.css"

export const Jog = ({item, setJog}) => {

  const deleteJog = (id) => {
    setJog(prev => [...prev.filter(jog => jog.id !== id)])
  }

  const speedCalculate = (distance = 0, time = 1) => {
    return (distance / (time/60)).toFixed(2);
  }

  return (
    <div className="jogs__list__jog">
      <DeleteButton id={item.id} deleteJog={deleteJog}/>
      <img src={icon} alt="icon" />
      <div className="jogs__list__jog__info">
        <div className="jogs__list__jog__info__item">
          {moment(item.date).format("DD/MM/YYYY")}
        </div>
        <div className="jogs__list__jog__info__item">
          <strong>Speed: </strong>
          {`${speedCalculate(item.distance, item.time)} km / h`}
        </div>
        <div className="jogs__list__jog__info__item">
          <strong>Distance: </strong>
          {`${item.distance} km`}
        </div>
        <div className="jogs__list__jog__info__item">
          <strong>Time: </strong>
          {`${item.time} min`}
        </div>
      </div>
    </div>
  )
}