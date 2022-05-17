import { TextField, Typography, FormControl, Box, Icon } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";

const SearchButton = () => {
    return <IconButton type="submit" value="submit">
        <SearchIcon />
    </IconButton>
}

function Header({onLocationSubmit}){
    const [userInput, setUserInput] = useState();
    const onChange = (e) => {
        setUserInput(e.target.value);
      };
      const onSubmit = (e) => {
          e.preventDefault();
          if(userInput !== null){
            onLocationSubmit(userInput);
          }
      }
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant='h1' component='h1'> Weather Forecast </Typography>
            <form onSubmit={onSubmit} >
                <Box sx={{width: '20vw'}}>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <TextField label="Type City Name or Zip Code" variant="outlined" size='small' onChange={onChange} InputProps={{endAdornment: <SearchButton />}}> {userInput}</TextField>
                    </FormControl>
                </Box>
            </form>
            
        </Box>
    )
}

export default Header;