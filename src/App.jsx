import List from "./components/List";
import Location from "./components/Location";
import { locations } from "./data.js";
import world from "./img/Path.png";

function App() {
  return (
    <div
      id="app"
      className="flex flex-col  border-2 border-black border-solid w-[550px] h-[704px]"
    >
      {/*HEADER*/}

      <nav className="text-white h-[7.8125%] bg-secondary-500 flex justify-center items-center">
        <img src={world} alt="World icon" className="h-[24px] w-[24px] mr-2" />
        <p>my travel journal</p>
      </nav>

      {/*LISTA*/}
      {/* 
      {locations.map((location, index) => (
          <div key={index}>
            <Location
              url={location.url}
              country={location.country}
              place={location.place}
              season={location.season}
              description={location.description}
            />
          </div>
        ))}
      */}
      <List className="mt-5" />
    </div>
  );
}

export default App;
