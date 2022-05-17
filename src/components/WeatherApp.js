import { useState, useEffect } from "react";
import Header from './Header.js';
import Dashboard from "./Dashboard.js";
import {getCoordinates} from '../utils/WeatherUtils';

function WeatherApp(){
    const [location, setLocation] = useState('Charlottesville');
    const [position, setPosition] = useState(null);

    // https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks
    // for some reason, seems to get triggered twice
    useEffect(() => { 
        let ignore = false;
        async function fetchData() {
            const result = await getCoordinates(location);
        if (!ignore) setPosition(result);
    }

    fetchData();
    return () => { ignore = true; }
    }, [location]);

    return (
        <>
            <Header onLocationSubmit= {(loc) => setLocation(loc)}/>
            {position && <Dashboard location={location} position={position}/>}
        </>
    )
}

export default WeatherApp;