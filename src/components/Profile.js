import {Link} from "react-router-dom";

export default function Profile ({userLogged, user, setUserLogged}) {
  if (! user) {
    return null;
  }
  return <div>
    <p>Este es el perfil de @{user.username}</p>
    <p>Enviame un email a {user.email}</p>
    <div>
      {userLogged && <button>MD wip</button>}
      {userLogged && <button>Follow wip</button>}
      {userLogged && userLogged.id === user.id && <button>Opciones wip</button>}
      {! userLogged && <Link to='login'>Login to contact with @{user.username}</Link>}
      {userLogged && userLogged.id === user.id && <button onClick={() => setUserLogged(null)}>Cierra sesión</button>}
    </div>
  </div>;
}