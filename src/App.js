import './App.scss';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ThemeSelector from "./components/ThemeSelector";

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
    <div className={theme}>
      <Navbar>
        <ThemeSelector
          themeSelected={theme}
          setTheme={setTheme}
        />
      </Navbar>
      <Home
        addBleatHandler={addBleatHandler}
        bleats={bleats}
        setBleats={setBleats}
      />
    </div>
  );
}
