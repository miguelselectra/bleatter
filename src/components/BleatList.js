import Bleat from "./Bleat";

export default function BleatList ({bleats, setBleats}) {
  const deleteBleatHandler = (id) => {
    setBleats(bleats.filter(bleat => bleat.id !== id));
  }

  return bleats.map((bleat) => {
    return <Bleat
      bleat={bleat}
      key={bleat.id}
      deleteHandler={ () => deleteBleatHandler(bleat.id) }
    />;
  });
}