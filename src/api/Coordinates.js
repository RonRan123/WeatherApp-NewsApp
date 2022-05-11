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

  export {getCoordinates};