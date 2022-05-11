import timestamp from "unix-timestamp";
function CurrentWeather(current){
    return (
     <>
     {JSON.stringify(current, null, 4)}
     </>   
    );
}

export default CurrentWeather;