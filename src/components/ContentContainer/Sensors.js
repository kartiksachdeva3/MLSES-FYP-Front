import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SensorImage from "../../static/images/sensor.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: "20px 20px",
    background: "#d0f0c0",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#526e3e",
  },
  typo: {
    padding: "0px 2px",
  },
}));



const SensorCardlay = ({ data }) => {
  const classes = useStyles();
  

 

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Test Sensor 0"
        subheader={data.epoch}
      />
      <CardMedia className={classes.media} image={SensorImage} title="Sensor" />
      <CardContent>
        <Typography
          variant="body2"
          color="#526e3e"
          component="ul"
          className={classes.typo}
        >
          <li> Level 0 : {data.mlevel0}</li>
          <li> Level 1 : {data.mlevel1}</li>
          <li> Level 2 : {data.mlevel2}</li>
          <li> Level 3 : {data.mlevel3}</li>
        </Typography>
      </CardContent>
    
    </Card>
  );
};
export default SensorCardlay;
