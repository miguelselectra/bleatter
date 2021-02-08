import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";
import Profile from "../components/Profile";

export default function ProfileParam ({userLogged, setUserLogged}) {
  const { username } = useParams();
  const [ userSearched, setUserSearched ] = useState(null);

    // extract in a function / service or smthg
    useEffect(() => {
      axios.get('http://localhost:8000/users?username=' + username ) // cannot add + '_embed=bleats' ... json server sucks
        .then((response) => {
          if (response.data.length !== 0) {
            setUserSearched(response.data[0]);
            console.log(response.data[0])
          }
      }).catch((e) => {
        console.log(e)
        console.log('Dont forget launch: npx json-server --watch data/db.json --port 8000');
      });
    }, []);

  return (
    <div className='search'>
      { userSearched && <Profile
        setUserLogged={setUserLogged}
        user={userSearched}
        userLogged={userLogged}
      />}
    </div>
  );
}