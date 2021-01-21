import React from 'react'
import { makeStyles } from "@material-ui/core";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import MemoryIcon from '@material-ui/icons/Memory';



const useStyles = makeStyles((theme) => ({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '300px',
        height: '91%',
        backgroundColor: '#1187ba'
    },
    root: {
        width: '100%',
        position: 'center',
        top: '0px',
        backgroundColor: theme.palette.background.paper,
      },
    nested: {
        paddingLeft: theme.spacing(6),
      },
}));
export default function SideMenu() {
    const classes  = useStyles();
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
     };

    return (
<div className={classes.sideMenu}>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Dashboard
        </ListSubheader>
      }
      className={classes.root}
    >
    <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <LocalFloristIcon/>
        </ListItemIcon>
        <ListItemText primary="Fields" />
        {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Field 1" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Field 2" />
          </ListItem>
        </List>
      </Collapse>
    <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <MemoryIcon/>
        </ListItemIcon>
        <ListItemText primary="Sensor" />
        {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Sensor 1" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Sensor 2" />
          </ListItem>
        </List>
      </Collapse>
    </List>
</div>
    )
}

