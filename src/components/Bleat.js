export default function Bleat ({bleat, deleteHandler}) {
  return <div className='bleat-card'>
    {bleat.message} from {bleat.author}<button onClick={deleteHandler}>Delete</button>
  </div>;
}