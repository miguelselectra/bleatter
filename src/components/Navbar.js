import logo from '../logo.svg';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/counterSlice'

export default function Navbar ({children, userLogged}) {
  let myProfileUrl = '';
  if (userLogged) {
    myProfileUrl = `/users/${userLogged.username}`;
  }
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='navbar' >
      <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
      <ul>
        <li><Link to='/'>Bleats</Link></li>
        <li><Link to='/old.search'>Search input</Link></li>
        <li><Link to='/search'>Search select</Link></li>
        { ! userLogged && <li><Link to='/login'>Login</Link></li>}
        { userLogged &&  <li><Link to={myProfileUrl}>My Profile</Link></li>}
      </ul>
      {children}
      {count}
      <button onClick={() => dispatch(increment())} >
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button onClick={() => dispatch(incrementByAmount(30))}>
        Decrement
      </button>
    </div>
  );
}