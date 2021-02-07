import logo from '../logo.svg';

export default function Navbar ({children}) {
  return (
    <div className='navbar' >
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li>Bleats</li>
        <li>Busqueda</li>
        <li>Perfil</li>
        <li>Menciones</li>
      </ul>
      {children}
    </div>
  );
}