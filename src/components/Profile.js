import {Link} from "react-router-dom";
import { logout } from '../features/userSlice'
import { useDispatch } from 'react-redux'

export default function Profile ({userLogged, user, setUserLogged}) {
  const dispatch = useDispatch()

  if (! user) {
    return null;
  }
  return <div>
    <p>Este es el perfil de @{user.username}</p>
    <p>Contactame en {user.email}</p>
    <div>
      {userLogged && <button>MD wip</button>}
      {userLogged && <button>Follow wip</button>}
      {userLogged && userLogged.id === user.id && <button>Opciones wip</button>}
      {! userLogged && <Link to='login'>Login to contact with @{user.username}</Link>}
      {userLogged && userLogged.id === user.id && <button onClick={() => dispatch(logout())}>Cierra sesión</button>}
    </div>
  </div>;
}