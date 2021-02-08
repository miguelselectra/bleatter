import { useState} from "react";
import axios from "axios";
import Profile from "../components/Profile";
import BleatList from "../components/BleatList";

export default function Search ({userLogged}) {
  const [ userSearched, setUserSearched ] = useState(null);
  const [ searchParam, setSearchParam] = useState('');
  const [ bleats, setBleats ] = useState([]);

  const search = () => {
    axios.get('http://localhost:8000/users?username=' + searchParam + '&_embed=bleats')
      .then((response) => {
        if (response.data.length !== 0) {
          setUserSearched(response.data[0]);
          let  bleats = response.data[0].bleats;
          let bleatsWithUser = bleats.map((bleat) => {
            bleat.user = response.data[0];
            return bleat;
          })
          setBleats(bleatsWithUser);
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
      { bleats && <BleatList
        bleats={bleats}
        setBleats={setBleats}
        userLogged={userLogged}
      />}
    </div>
  );
}