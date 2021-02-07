export default function Bleat ({bleat, deleteHandler}) {
  return <div className='bleat-card'>
    <p>{bleat.message} from @{bleat.user.username}</p>
    <div>
      <button>Responder</button>
      <button>Like</button>
      <button>Opciones</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  </div>;
}