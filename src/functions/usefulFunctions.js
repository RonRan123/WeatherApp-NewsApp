import timestamp from "unix-timestamp";
const formatDate = (options) => {
    return Intl.DateTimeFormat("en-US", options).format(weather.date);
  }