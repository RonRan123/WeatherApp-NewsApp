import timestamp from "unix-timestamp";

const API_KEY = process.env.REACT_APP_API_KEY;

const getCoordinates = (location) => {
    let latitude, longitude;
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("q", location);
    return fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        if (obj.cod === 200) {
          latitude = obj.coord.lat;
          longitude = obj.coord.lon;
          return [latitude, longitude];
        }
        else{
          return [null,null]
        }
      });
  };

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
  const formatDate = (dt, options) => {
    return Intl.DateTimeFormat("en-US", options).format(timestamp.toDate(dt));
  };

  const formatTemp = (temp, isCelsius = false, withEnder=true) => {
    if(isCelsius){
      return Math.round((temp - 32) * 5 / 9) + (withEnder?"°C":"");
    }
    else{
      return Math.round(temp) + (withEnder?"°F":"");
    }
  };

  export {getCoordinates, getWeather, formatDate, formatTemp};