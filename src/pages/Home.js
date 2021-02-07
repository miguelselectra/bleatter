import BleatForm from "../components/BleatForm";
import BleatList from "../components/BleatList";

export default function Home ({bleats, setBleats, addBleatHandler, }) {
  return (
    <div className='home'>
      <BleatForm
        addBleatHandler={addBleatHandler}
      />

      <BleatList
        bleats={bleats}
        setBleats={setBleats}
      />
    </div>
  );
}