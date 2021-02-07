import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";

export default function App() {
  const [bleats, setBleats] = useState([
    { message: 'hola', id: 1, author: 'Pepe' },
    { message: 'adios', id: 2, author: 'Mario' },
    { message: 'testeito', id: 3, author: 'Luisito' },
  ]);
  const [theme, setTheme] = useState('App white');

  const addBleatHandler = (bleat) => {
    setBleats([...bleats, bleat]);
  }

  return (
    <Router>
      <div className={theme}>
        <Navbar>
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
                setBleats={setBleats}
              />
            </Route>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='*'>
              404
            </Route>
          </Switch>
      </div>
    </Router>
  );
}
