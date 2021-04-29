import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import MemoryIcon from "@material-ui/icons/Memory";
import React, { useState} from "react";
import { GiWheat } from "react-icons/gi";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { IconContext } from "react-icons/lib";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import style from "./AppMenu.module.css";
import Description from "../ContentContainer/Description";
import SensorCardlay from "../ContentContainer/Sensors";
import SensorData from "../../data/sensordummy.json";
import FieldsCardlay from "../ContentContainer/Fields";
import FieldsData from "../../data/fieldsdummy.json";
import Grid from "@material-ui/core/Grid";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import GreenButton from '../Buttons/Button';


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



export default function Skeleton() {

  const [visible, setVisible]= useState("Description");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openn = Boolean(anchorEl);

  const doClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const doClose = () => {
    setAnchorEl(null);
  };
 

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  

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
              <div className={ `${style.navbarContainer} ${style.container} `}>
                <div className={style.navbarLogo} onClick={() => setVisible("Description")} >
                  <GiWheat  className={style.navbarIcon} />
                  MLSMES
                </div>
                
                  
                  <div className={style.navMenu} >
                     
                    <GreenButton 
                          onClick={doClick}
                          startIcon={<AccountCircleIcon />}
                          text={"User"}
                    />
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={openn}
                        onClose={doClose}
                        TransitionComponent={Fade}
                        >
                        <MenuItem onClick={doClose}>Profile</MenuItem>
                        <MenuItem onClick={doClose}>My account</MenuItem>
                        <Link to="/login" ><MenuItem className={style.menuLink} onClick={doClose}>Logout</MenuItem></Link>
                      </Menu> 
{/*                     
                        <GreenButton className={style.navItem}
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          startIcon={<SettingsIcon />}
                        >
                          Settings
                        </GreenButton> */}
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
            {FieldsData.map((item, key) => {
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
            <Grid container spacing= {3}>
              {SensorData.map((item, key) => {
              return (
                <div key={key} className={style.sensorCards}>
                  <SensorCardlay data={item} />
                </div>
              );
            })}
        </Grid>
          }
        </main>
      </div>
    );  
} 
