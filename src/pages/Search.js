import { useState, useEffect } from "react";
import axios from "axios";
import Profile from "../components/Profile";
import BleatList from "../components/BleatList";
import Select from 'react-select';

export default function Search ({userLogged}) {
  const [ userSearched, setUserSearched ] = useState(null);
  const [ searchParam, setSearchParam] = useState('q');
  const [ bleats, setBleats ] = useState([]);
  const [ options, setOptions ] = useState([]);

  // search with button - static
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

  // search with button - dynamic
  useEffect(() => {
    axios.get('http://localhost:8000/users?username_like=' + searchParam + '&_embed=bleats')
      .then((response) => {
        console.log(searchParam);
        if (response.data.length !== 0) {
          const userList = response.data.map((user) => {
            return {
              value: user.id,
              label: user.username,
              user: user
            };
          });
          setOptions(userList);
        }
      }).catch((e) => {
      console.log(e)
      console.log('Dont forget launch: npx json-server --watch data/db.json --port 8000');
    });
  }, [searchParam]);

  const handleChange = (e) => {
    setUserSearched(e.user);
    let  bleats = e.user.bleats;
    let bleatsWithUser = bleats.map((bleat) => {
      bleat.user = e.user;
      return bleat;
    })
    setBleats(bleatsWithUser);
  }

  return (
    <div className='search'>
      Static search: <input
        type="text"
        onChange={(e) => setSearchParam(e.target.value)}
        value={searchParam}
      /><button onClick={search}>Busca</button>

      <Select
        onChange={(e) => handleChange(e)}
        options={options}
        value={searchParam}
      />

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