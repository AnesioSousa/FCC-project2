import Location from "./components/Location";
import world from "./img/Path.png";

function App() {
  return (
    <div className="flex justify-center items-center ">
      <div className="border-2 border-black border-solid w-[550px] h-[704px]">
        {/*HEADER*/}
        <div className="text-white h-[55px] bg-secondary-500 flex justify-center items-center">
          <img
            src={world}
            alt="World icon"
            className="h-[24px] w-[24px] mr-2"
          />
          <p>my travel journal</p>
        </div>

        {/*LISTA*/}
        <div className="mt-10">
          <Location />
        </div>
      </div>
    </div>
  );
}

export default App;
