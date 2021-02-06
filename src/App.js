import { useState } from 'react';
import BleatList from './components/BleatList';
import BleatForm from "./components/BleatForm";
import './App.css';

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
      <BleatForm
        addBleat={addBleatHandler}
      />

      <BleatList
        bleats={bleats}
        setBleats={setBleats}
      />
    </div>
  );
}
