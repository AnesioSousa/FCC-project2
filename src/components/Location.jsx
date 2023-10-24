import mapIcon from "../img/Fill219.png";

function Location({ country, place, season, description }) {
  return (
    <div className="flex justify-between items-center pt-5 w-full">
      {/* MAIN CONTENT HEADER */}
      <div className="flex flex-col items-start ml-5 mt-2 mr-10">
        <div className="flex justify-start items-center">
          <img
            className="h-[9.55px] w-[9px] rounded-lg mr-1"
            src={mapIcon}
            alt="Map icon"
          />
          <h3 className="mr-3">{String(country).toLocaleUpperCase()} </h3>
          <a className="underline text-gray-100 cursor-pointer hover:text-cyan-400">
            View on Google Maps
          </a>
        </div>
        {/* MAIN CONTENT*/}
        <div>
          <h1 className="mb-4 font-bold text-2xl">{place}</h1>
          <p className="text-sm font-bold">{season}</p>
          <p className="text-sm">{description} </p>
        </div>
      </div>
    </div>
  );
}
export default Location;
