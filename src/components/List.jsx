import { locations } from "../data.js";
import Location from "./Location.jsx";
import getImageUrl from "./utils.js";

export default function List() {
  /* <div className="w-1/2 h-[200px] overflow-hidden">
        <img
          className="block max-w-full h-auto ml-10 rounded-lg w-[22.72%]"
          src={getImageUrl(location)}
          alt={location.country}
        />
      </div> */
  const listItems = locations.map((location) => (
    <li key={location.id} className="flex justify-between">
      <img
        className="ml-10 rounded-lg w-[22.72%]"
        src={getImageUrl(location)}
        alt={location.country}
      />
      <Location
        country={location.country}
        place={location.place}
        season={location.season}
        description={location.description}
      />
    </li>
  ));
  return <ul>{listItems}</ul>;
}
