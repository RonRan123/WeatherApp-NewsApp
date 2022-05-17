import { Avatar, Box, Paper, Slider, Typography } from "@mui/material";
import {formatDate, formatTemp} from "../utils/WeatherUtils.js"

function getImage (icon, alt ='no alternative text'){
    return <Avatar src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"} alt={alt}/>
}
function getDayRange(min, max, avg){
    return <Slider>

    </Slider>
}
function Daily({dayWeather, isToday}){
    return (
        <Paper>
            <Box display="flex" justifyContent='space-evenly'>
                <Typography variant='h5'>{isToday? "Today":formatDate(dayWeather.dt, { weekday: 'short'})}</Typography>
                {getImage(dayWeather.weather[0].icon, dayWeather.weather[0].description)}
                {/* {getDayRange(min, max, avg)} */}
                <Typography variant='h5'>{formatTemp(dayWeather.temp.max) + '/' + formatTemp(dayWeather.temp.min) }</Typography>
            </Box>
        </Paper>
    );
}
export default Daily;