import "./App.css";
import GlassWrapper from "./GlassWrapper";
import SearchBar from "./searchBar/SearchBar";
import WeatherCard from "./weatherCard/WeatherCard";

const data = {
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],

  main: {
    temp: 309.31,
    pressure: 1001,
    humidity: 13,
  },

  wind: {
    speed: 2.2,
    deg: 346,
    gust: 4.86,
  },

  name: "Noida",
};

function App() {
  return (
    <div className="app-root">
      <div className="weather-app-root">
        <SearchBar />
        <GlassWrapper>
          <WeatherCard data={data} />
        </GlassWrapper>
      </div>
    </div>
  );
}

export default App;
