import { useState, useEffect } from "react";
import axios from "axios";
import Profile from "../components/Profile";
import BleatList from "../components/BleatList";
import Select from 'react-select';

export default function NewSearch ({userLogged}) {
  const [ userSearched, setUserSearched ] = useState(null);
  const [ searchParam, setSearchParam] = useState('');
  const [ bleats, setBleats ] = useState([]);
  const [ options, setOptions ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/users?username_like=^' + searchParam + '(h?)$&_embed=bleats')
      .then((response) => {
        console.log(response.data);
        if (response.data.length !== 0) {
          const userList = response.data.map((user) => {
            return {
              value: user.id,
              label: user.username,
              user: user
            };
          });
          setOptions(userList);
        } else {
          setOptions([]);
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
      <Select
        onChange={(e) => handleChange(e)}
        options={options}
        value={searchParam}
        inputValue={searchParam}
        onInputChange={setSearchParam}
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