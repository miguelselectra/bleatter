export default function Bleat ({bleat, deleteHandler, userLogged}) {
  return <div className='bleat-card'>
    <p>{bleat.message} from @{bleat.user.username}</p>
    <div>
      <button>Responder</button>
      <button>Like</button>
      {userLogged && userLogged.id === bleat.user.id && <button>Opciones</button>}
      {userLogged && userLogged.id === bleat.user.id  && <button onClick={deleteHandler}>Delete</button>}
    </div>
  </div>;
}