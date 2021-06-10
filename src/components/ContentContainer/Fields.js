
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FieldImage from "../../static/images/farm.jpg";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

const FieldsCardlay =({data}) => {
  const classes = useStyles();
  
  return (
   
    <React.Fragment>
          <Card className={classes.root}>
      <CardHeader 
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            F
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        //title={data.fieldname}
        //subheader={data.epoch}
      />
      <CardMedia className={classes.media} image={FieldImage} title="Fields" />
      <CardContent>
        <Typography
          variant="body2"
          color="#526e3e"
          
          className={classes.typo}
        >
          
        <ul>
      <li> UserId : {data.userId}</li>
       <li> Geolocation : {data.userId}</li>
      <li> Time : {data.userId}</li>
      <li> Network_Strength : {data.userId}</li>
      </ul>
         
         
        </Typography>
      </CardContent>
    </Card>
    </React.Fragment>
    
  
    

  );
};
export default FieldsCardlay;
