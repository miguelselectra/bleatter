import BleatForm from "../components/BleatForm";
import BleatList from "../components/BleatList";

export default function Home ({bleats, setBleats, addBleatHandler, userLogged }) {
  return (
    <div className='home'>
      <BleatForm
        addBleatHandler={addBleatHandler}
        userLogged={userLogged}
      />

      <BleatList
        bleats={bleats}
        setBleats={setBleats}
      />
    </div>
  );
}