import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  },
  text:{
    color:"white",
  }
}

));

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

export default function GreenButton({...props}) {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={`${classes.margin} ${classes.text} `}  type={props.type} startIcon={props.startIcon ? props.startIcon : null} onClick={props.onClick ? props.onClick : null} >{props.text} 
        </Button>
      </ThemeProvider>
    </div>
  );
}
