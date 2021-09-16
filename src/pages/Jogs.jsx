import React, { useState } from "react";
import moment from "moment";

// ? Components
import { Modal } from "../components/Modal";
import { Jog } from "../components/Jog";
import { AddButton } from "../components/AddButton";
import icon from "../assets/images/sad-rounded-square-emoticon.svg";

// ? Styles
import "./styles/jogs.css";

export const Jogs = ({jogs, filter, token, getJogs, userId}) => {
const [isModalOpen, toggleModal] = useState(false);

const filterJogs = (jogs, filter) => {
  if (!filter.from && !filter.to) {
    return jogs
  }else if (!filter.from) {
    return jogs.filter(item => new Date(moment(item.date).format("YYYY-MM-DD")) <= new Date(moment(filter.to).format("YYYY-MM-DD")))
  } else if (!filter.to) {
    return jogs.filter(item => new Date(moment(item.date).format("YYYY-MM-DD"))>= new Date(moment(filter.from).format("YYYY-MM-DD")))
  } else if (filter.from && filter.to) {
    return jogs.filter(item => (new Date(moment(item.date).format("YYYY-MM-DD")) >= new Date(moment(filter.from).format("YYYY-MM-DD"))) && ( new Date(moment(item.date).format("YYYY-MM-DD")) <= new Date(moment(filter.to).format("YYYY-MM-DD"))))
  } 
}

  return (
    <main className="jogs">
      {jogs && jogs.length === 0 ? 
        <>
          <section className="jogs__empty">
            <img src={icon} alt="" />
            <span>Nothing is there</span>
            <button onClick={() => toggleModal(true)}>Create your jog first</button>
          </section>
        </>
        :
        <section className="jogs__list">
          {filterJogs(jogs, filter).map( (item, index) => <Jog item={item} key={index} userId={userId} getJogs={getJogs} token={token}/>)}
          <AddButton toggleModal={toggleModal}/>
        </section>
      }
      {isModalOpen && 
        <Modal toggleModal={toggleModal} token={token}  getJogs={getJogs}/>
      }
    </main>
  )
}