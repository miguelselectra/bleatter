export default function Bleat ({bleat, deleteHandler}) {
  return <div className='bleat-card'>
    <p>{bleat.message} from {bleat.author}</p>
    <div>
      <button>Like</button>
      <button>Opciones</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  </div>;
}