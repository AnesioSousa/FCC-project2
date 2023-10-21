import Location from "./components/Location";
import world from "./img/Path.png";

const locations = [
  {
    url: "https://source.unsplash.com/WLxQvbMyfas",
    country: "Japan",
    place: "Mount Fuji",
    season: "12 Jan, 2021 - 24 Jan, 2021",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
  },
  {
    url: "https://source.unsplash.com/JmuyB_LibRo",
    country: "Australia",
    place: "Sydney Opera House",
    season: "27 May, 2021 - 8 Jun, 2021",
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
  },
  {
    url: "https://source.unsplash.com/3PeSjpLVtLg",
    country: "Norway",
    place: "Geirangerfjord",
    season: "01 Oct, 2021 - 18 Nov, 2021",
    description:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
  },
];

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
          {locations.map((location, index) => (
            <Location
              key={index}
              url={location.url}
              country={location.country}
              place={location.place}
              season={location.season}
              description={location.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
