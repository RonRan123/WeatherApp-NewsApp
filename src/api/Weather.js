const API_KEY = process.env.REACT_APP_API_KEY;

const getWeather = async (location) => {
    const [lat, long] = location;
    if (lat === null && long === null) {
      return "error";
    }

    const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("lat", lat);
    url.searchParams.append("lon", long);
    url.searchParams.append("units", "imperial");
    url.searchParams.append("exclude", "minutely,alerts");

    return fetch(url)
      .then((resp) => {
        return resp.json();
      })
  };

  export {getWeather};