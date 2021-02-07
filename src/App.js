import './App.scss';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  const [bleats, setBleats] = useState([
    { message: 'hola', id: 1, author: 'Pepe' },
    { message: 'adios', id: 2, author: 'Mario' },
    { message: 'testeito', id: 3, author: 'Luisito' },
  ]);

  const addBleatHandler = (bleat) => {
    setBleats([...bleats, bleat]);
  }

  return (
    <div className="App">
      <Navbar />
      <Home
        addBleatHandler={addBleatHandler}
        bleats={bleats}
        setBleats={setBleats}
      />
    </div>
  );
}
