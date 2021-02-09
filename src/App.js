import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import axios from "axios";
import ProfileParam from "./components/ProfileParam";
import NewSearch from "./pages/NewSearch";

export default function App() {
  const [bleats, setBleats] = useState([]);
  const [theme, setTheme] = useState('App white');
  const [userLogged, setUserLogged] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/bleats?_expand=user')
      .then((response) => {
        setBleats(response.data);
      }).catch(() => {
        console.log('Dont forget launch: npx json-server --watch data/db.json --port 8000');
      });
  }, []);

  const addBleatHandler = (bleat) => {
    axios.post('http://localhost:8000/bleats', bleat)
      .then((response) => {
        let bleatCreated = response.data;
        bleatCreated.user = userLogged;
        setBleats([...bleats, bleatCreated]);
      }).catch(() => {
      console.log('Dont forget launch: npx json-server --watch data/db.json --port 8000');
    });
  }
// todo: contexto theme, añadir date a un bleat, añadir confirm a eliminar
  return (
    <Router>
      <div className={theme}>
        <Navbar
          userLogged={userLogged}
        >
          <ThemeSelector
            themeSelected={theme}
            setTheme={setTheme}
          />
        </Navbar>
          <Switch>
            <Route exact path='/'>
              <Home
                addBleatHandler={addBleatHandler}
                bleats={bleats}
                userLogged={userLogged}
                setBleats={setBleats}
              />
            </Route>
            <Route path='/old.search'>
              <Search
                userLogged={userLogged}
              />
            </Route>
            <Route path='/search'>
              <NewSearch
                userLogged={userLogged}
              />
            </Route>
            <Route path='/login'>
              <Login
                userLogged={userLogged}
                setUserLogged={setUserLogged}
              />
            </Route>
            <Route path='/users/:username'>
              <ProfileParam
                userLogged={userLogged}
                user={userLogged}
                setUserLogged={setUserLogged}
              />
            </Route>
            <Route path='*'>
              404
            </Route>
          </Switch>
      </div>
    </Router>
  );
}
