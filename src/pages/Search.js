import { useState} from "react";
import axios from "axios";
import Profile from "../components/Profile";

export default function Search ({userLogged}) {
  const [ userSearched, setUserSearched ] = useState(null);
  const [ searchParam, setSearchParam] = useState('');

  const search = () => {
    axios.get('http://localhost:8000/users?username=' + searchParam ) // cannot add + '_embed=bleats' ... json server sucks
      .then((response) => {
        if (response.data.length !== 0) {
          setUserSearched(response.data[0]);
          console.log(response.data[0])
        }
      }).catch((e) => {
      console.log(e)
      console.log('Dont forget launch: npx json-server --watch data/db.json --port 8000');
    });
  }

  return (
    <div className='search'>
      <input
        type="text"
        onChange={(e) => setSearchParam(e.target.value)}
      />
      <button onClick={search}>Busca</button>
      { userSearched && <Profile
        user={userSearched}
        userLogged={userLogged}
      />}
    </div>
  );
}