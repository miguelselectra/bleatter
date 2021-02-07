import logo from '../logo.svg';
import { Link } from "react-router-dom";

export default function Navbar ({children}) {
  return (
    <div className='navbar' >
      <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
      <ul>
        <li><Link to='/'>Bleats</Link></li>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
      {children}
    </div>
  );
}