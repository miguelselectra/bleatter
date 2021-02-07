import { useState } from 'react';
import axios from "axios";

export default function Login ({ userLogged, setUserLogged }) {
  const [email, setEmail] = useState('pepe@gmail.com');
  const [password, setPassword] = useState('pepe123');

  const loggerUser = () => {
    axios.get(`http://localhost:8000/users?email=${email}&password=${password}`)
      .then((response) => {
        if ( response.data.length === 0 ) {
          console.log('email o contraseña incorrecta');
        }
        setUserLogged(response.data[0])
      }).catch(() => {
      console.log('Dont forget launch: npx json-server --watch data/db.json --port 8000');
    });
  }

  const unLoggerUser = () => {
    setUserLogged(null)
  }

  return (
    <div className='login'>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={loggerUser}>Logueate</button>

      { userLogged && <div>
        <p>Estás logueado como @{userLogged.username}</p>
        <button onClick={unLoggerUser}>Cierra sesión</button>
      </div>}
      { ! userLogged && <div>
        <p>Tienes que loguerte wey</p>
      </div> }

    </div>
  );
}