import Bleat from "./Bleat";
import axios from "axios";

export default function BleatList ({ bleats, setBleats, userLogged }) {
  const deleteBleatHandler = (id) => {
    axios.delete('http://localhost:8000/bleats/' + id)
      .then((response) => {
        setBleats(bleats.filter(bleat => bleat.id !== id));
      }).catch(() => {
      console.log('Dont forget launch: npx json-server --watch data/db.json --port 8000');
    });
  }

  return bleats && bleats.map((bleat) => {
    return <Bleat
      bleat={bleat}
      key={bleat.id}
      deleteHandler={ () => deleteBleatHandler(bleat.id) }
      userLogged={userLogged}
    />;
  });
}