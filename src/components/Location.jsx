import mapIcon from "../img/Fill219.png";

function Location({ url, country, place, season, description }) {
  return (
    <div className="flex">
      <img
        className="ml-10 h-[225px] w-[168px] rounded-lg"
        src={url}
        alt={country}
      />
      <div className="ml-5 mt-2 mr-10">
        <div className="flex flex-col items-start">
          <div className="flex justify-start items-center">
            <img
              className="h-[9.55px] w-[7px] rounded-lg mr-1"
              src={mapIcon}
              alt="Map icon"
            />
            <h3 className="mr-3">{String(country).toLocaleUpperCase()} </h3>
            <a className="underline text-gray-100 cursor-pointer hover:text-cyan-400">
              View on Google Maps
            </a>
          </div>
          <div>
            <h1 className="mb-4 font-bold text-4xl">{place}</h1>
            <p className="text-sm font-bold">{season}</p>
            <p className="text-sm">{description} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Location;
