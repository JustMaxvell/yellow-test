import React, { useState, useEffect } from "react";

// ? Components
import { BearFace } from "../assets/icons/BearFace"

// ? Styles
import "./styles/login-in.css";

export const LoginIn = ({setUser, token}) => {
  const [width, setWidth] = useState(window.innerWidth)

  const login = async () => {
    await fetch("https://jogtracker.herokuapp.com/api/v1/auth/user", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then( response => response.json())
    .then( json => { localStorage.setItem('user', JSON.stringify(json.response)); setUser(JSON.stringify(json.response))})
  }

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  })

  return (
    <main className="loginIn">
      <section className="login-form">
        <BearFace mobile={width > 700 ? false : true}/>
        <button onClick={() => login()}>Let me in</button>
      </section>
    </main>
  )
}