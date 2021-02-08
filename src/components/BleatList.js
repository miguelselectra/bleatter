import Bleat from "./Bleat";

export default function BleatList ({ bleats, setBleats, userLogged }) {
  const deleteBleatHandler = (id) => {
    setBleats(bleats.filter(bleat => bleat.id !== id)); // todo delete in db
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