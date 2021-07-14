import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import MemoryIcon from "@material-ui/icons/Memory";
import * as actions from '../../redux/actions/index';
import { GiWheat } from "react-icons/gi";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconContext } from "react-icons/lib";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import style from "./AppMenu.module.css";
import Description from "../ContentContainer/Description";
import SensorCardlay from "../ContentContainer/Sensors";
import FieldsCardlay from "../ContentContainer/Fields";
import Grid from "@material-ui/core/Grid";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import GreenButton from '../Buttons/Button';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';

const mapDispatchToProps = dispatch => {
  return {
    onSensor: (sid, sname, rloc , fid) =>
      dispatch(actions.sensorform(sid, sname, rloc , fid))
  };
};


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },

  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));




const Skeleton= props => {

  const [visible, setVisible]= useState("Description");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openn = Boolean(anchorEl);

  const doClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const doClose = () => {
    setAnchorEl(null);
  };

// Add sensor Start

  const [sform, setSform] = useState({ sid: '', name: '', relativeLocation: '', fid: ''});



  const submitHandler = event => {
    event.preventDefault();
    props.onSensor(sform.sid, sform.name, sform.relativeLocation, sform.fid);
    setShow(false);
    //console.log(sform);
  };

// add sensor finish

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [show, setShow] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

    
  const [fdetails, setfdetails] = useState([]);

  const [sdetails, setsdetails] = useState([]);

    axios.defaults.headers = 
    {
  'Content-Type': 'application/json',
   Authorization: 'bearer ' + localStorage.getItem('Jwt_token')
    } 
  useEffect(() => {
    axios.get('http://localhost:3001/api/user/fields/0')
    .then((result) => {
       setfdetails(result.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [fdetails]) 

 useEffect(() => {
    axios.get('http://localhost:3001/api/fields/0/values')
    .then((result) => {
       setsdetails(result.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [sdetails]) 

 

 

  return (
      <div className={classes.root}>
         
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          style={{ background: "#526e3e" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={open ? handleDrawerClose : handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <IconContext.Provider value={{ color: "#fff" }}>
              <div className={ `${style.appbarContainer} ${style.container} `}>
                <div className={style.appbarLogo} onClick={() => setVisible("Description")} >
                  <GiWheat  className={style.appbarIcon} />
                  MLSMES
                </div>
                
                  
                  <div className={style.appMenu} >
                    
                    <GreenButton onClick={handleClickOpen} startIcon={<MemoryIcon/>}>
                          Add Sensor
                    </GreenButton>

                    <Dialog open={show} onClose={handleClose} aria-labelledby="form-dialog-title">
                                                            <DialogTitle id="form-dialog-title">Add Sensor</DialogTitle>
                                                            <DialogContent>
                                                              <TextField
                                                                autoFocus
                                                                margin="dense"
                                                                id="sid"
                                                                label="Sensor Id"
                                                                value={sform.sid}
                                                                type="text"
                                                                onChange={(e) => setSform({ ...sform, sid: e.target.value })}
                                                                fullWidth
                                                              />
                                                              <TextField
                                                                autoFocus
                                                                margin="dense"
                                                                id="sname"
                                                                label="Sensor Name"
                                                                value={sform.name}
                                                                type="text"
                                                                onChange={(e) => setSform({ ...sform, name: e.target.value })}
                                                                fullWidth
                                                              />
                                                              <TextField
                                                                autoFocus
                                                                margin="dense"
                                                                id="rloc"
                                                                label="Relative Location"
                                                                value={sform.relativeLocation}
                                                                type="text"
                                                                onChange={(e) => setSform({ ...sform, relativeLocation: e.target.value })}
                                                                fullWidth
                                                              />
                                                              <TextField
                                                                autoFocus
                                                                margin="dense"
                                                                id="fid"
                                                                label="Field Id"
                                                                value={sform.fid}
                                                                type="text"
                                                                onChange={(e) => setSform({ ...sform, fid: e.target.value })}
                                                                fullWidth
                                                              />
                                                            </DialogContent>
                                                            <DialogActions>
                                                              <GreenButton onClick={submitHandler} >
                                                                Submit
                                                              </GreenButton>
                                                            </DialogActions>
                                                          </Dialog>
              

          
                    

                    <GreenButton 
                          onClick={doClick}
                          startIcon={<AccountCircleIcon />}
                          
                    > User </GreenButton>
                   
                   <Link to= "/logout">
                   <GreenButton 
                          startIcon={<ExitToAppIcon />}
                          > Logout </GreenButton>
                   </Link>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={openn}
                        onClose={doClose}
                        TransitionComponent={Fade}
                        >
                        <MenuItem onClick={doClose}>My account</MenuItem>
                        <MenuItem onClick={doClose}>Settings</MenuItem>
                      </Menu> 
                        
                  </div>
              </div>
            </IconContext.Provider>
          </Toolbar>
          <div></div>
        </AppBar>
  
        {/* Side Menu  */}
  
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          style={{ background: "#5B7671" }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <div className={style.sidemenuContainer}>
            <List >
              <ListItem button key="Fields" onClick={() => setVisible("Fields")}>
                <ListItemIcon>
                  <LocalFloristIcon style={{color:"#526e3e"}}/>
                </ListItemIcon>
                <ListItemText primary="Fields" />
              </ListItem>
              <ListItem button key="Sensors" onClick={() => setVisible("Sensors")}>
                <ListItemIcon>
                  <MemoryIcon style={{color:"#526e3e"}} />
                </ListItemIcon>
                <ListItemText primary="Sensors" />
              </ListItem>
            </List>
          </div>
        </Drawer>
       
        
        <main className={classes.content}>
          <div className={classes.toolbar}/>
              {visible === "Description" && <Description/>}
          { visible === "Fields" &&
           <Grid container spacing={3}>
            {fdetails.map((item, key) => {
              return (
                <div key={key} className={style.fieldsCards}>
                  <FieldsCardlay data={item} />
                </div>
              );
            })
            }
          </Grid>
          }
            {visible === "Sensors" && 
            <Grid container spacing= {3}>{sdetails.map((item, key) => {
              return (
                <div key={key} className={style.fieldsCards}>
                  <SensorCardlay data={item} />
                </div>
              );
            })
            }
        </Grid>
          }
          

        </main>
      </div>
    );  
} 

export default connect(null,mapDispatchToProps)(Skeleton);
