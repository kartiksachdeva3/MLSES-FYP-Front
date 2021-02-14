import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
import React, { useState, useEffect } from "react";
import { GiWheat } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import style from "./AppMenu.module.css";
import SensorCardlay from "../ContentContainer/Sensors";
import SensorData from "../../data/sensordummy.json";
import Grid from "@material-ui/core/Grid";

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
}));

export default function Skeleton() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [click, setClick] = useState(false);

  // eslint-disable-next-line
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //  <div ><SensorCardlay  name={item.name} mlevel0={item.mlevel0} mlevel1={item.mlevel1} mlevel2={item.mlevel2} mlevel3={item.mlevel3} status="On" epoch="2021-Feb-12 13:11" />
  // </div>
  //   <div>{JSON.stringify(item.name)}</div>

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);
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
        style={{ background: "#5B7671" }}
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
              <div className={style.navbarLogo} onClick={closeMobileMenu}>
                <GiWheat className={style.navbarIcon} />
                MLSES
              </div>
              <div className={style.menuIcon} onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
              <ul className={click ? `${style.navMenu} ${style.active} ` : style.navMenu } >
                <li className={style.navItem} onClick={closeMobileMenu}>
                  <BiUserCircle className={style.navbarIcon} />
                  User
                </li>
                <li className={style.navItem} onClick={closeMobileMenu}>
                  <AiFillSetting className={style.navbarIcon} />
                  Setting
                </li>
              </ul>
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
        <div className="side-menu-container">
          <List className="sidemenu-list">
            <ListItem button key="Fields">
              <ListItemIcon>
                <LocalFloristIcon value={{ color: "#526E3E" }} />
              </ListItemIcon>
              <ListItemText primary="Fields" />
            </ListItem>
            <ListItem button key="Sensors">
              <ListItemIcon>
                <MemoryIcon />
              </ListItemIcon>
              <ListItemText primary="Sensors" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={3}>
          {SensorData.map((item, key) => {
            return (
              <div key={key} className="sensor-cards">
                <SensorCardlay data={item} />
              </div>
            );
          })}
        </Grid>
      </main>
    </div>
  );
}
