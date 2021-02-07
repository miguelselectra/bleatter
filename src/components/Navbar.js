import logo from '../logo.svg';
import { Link } from "react-router-dom";

export default function Navbar ({children}) {
  return (
    <div className='navbar' >
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li><Link to='/'>Bleats</Link></li>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
      {children}
    </div>
  );
}