import mapIcon from "../img/Fill219.png";

function Location() {
  return (
    <div className="flex">
      <img
        className="ml-10 h-[225px] w-[168px] rounded-lg"
        src="https://source.unsplash.com/WLxQvbMyfas"
        alt="Mount Fuji"
      />
      <div className="ml-5 mt-2 mr-10">
        <div className="flex justify-start items-center">
          <img
            className="h-[9.55px] w-[7px] rounded-lg mr-1"
            src={mapIcon}
            alt="Map icon"
          />
          <h3 className="mr-3">JAPAN </h3>
          <a className="underline text-gray-100 cursor-pointer hover:text-cyan-400">
            View on Google Maps
          </a>
        </div>
        <div>
          <h1 className="mb-4 font-bold text-4xl">Mount Fuji</h1>
          <p className="text-sm font-bold">12 Jan, 2021-24 Jan, 2021</p>
          <p className="text-sm">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Location;
