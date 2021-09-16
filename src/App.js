import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// ? Components
import { Header } from "./components/header/Header";
import { SendwichMenu } from "./components/SendwichMenu"
import { LoginIn } from "./pages/LoginIn";
import { Jogs } from "./pages/Jogs";
import { Info } from "./pages/Info";

// ? Styles
import "./reset.css";

// ? Fonts
import "./assets/fonts/fonts.css";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"))
  const [authorized, setAuthorized] = useState(false);
  const [jogs, setJog] = useState([]);
  const [filter, setFilter] = useState({from: '', to: ''})
  const [sendwichMenuOpen, setSendwichMenuOpen] = useState(false)

  const token = 'eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf';

  const getJogs = async () => {
    await fetch("https://jogtracker.herokuapp.com/api/v1/data/sync", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then(response => response.json())
    .then(json => setJog([...json.response.jogs]))
  }

  useEffect(() => {
    if (user) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  },[user])

  useEffect(() => {
    if (authorized) {
      getJogs()
    }
  }, [authorized])

  return (
    <Router>
      <div className="app">
        <Header authorized={authorized} jogs={jogs} setFilter={setFilter} filter={filter} sendwichMenuOpen={sendwichMenuOpen} setSendwichMenuOpen={setSendwichMenuOpen}/>
        {sendwichMenuOpen && <SendwichMenu sendwichMenuOpen={sendwichMenuOpen} setSendwichMenuOpen={setSendwichMenuOpen}/>}
        {!authorized ? 
          <>
            <Route path="/">
              <Redirect to="/login" />
            </Route>

            <Route path="/login">
              <LoginIn setUser={setUser} token={token}/>
            </Route>
          </>
          :
          <>
            <Route path="/">
              <Redirect to="/jogs" />
            </Route>

            <Route path="/jogs">
              <Jogs jogs={jogs} filter={filter} token={token} getJogs={getJogs} userId={JSON.parse(user).id}/>
            </Route>

            <Route path="/info">
              <Info />
            </Route>
          </>
        }
      </div>
    </Router>
  );
}

export default App;
