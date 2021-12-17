import * as React from 'react';
import clsx from 'clsx';
// import LayoutStyles from './LayoutStyle'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';






const drawerWidth = 240;
const LayoutStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 100,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      backgroundColor:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
}));

const Header = ({ open, toggleDrawer }) => {
  const classes = LayoutStyles();

  
 
  return (
    <>
      <AppBar
        position="absolute"
      
      >
 
         
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
           FORMULIR DATA DIRI
          </Typography>

      
         

      </AppBar>

    </>
  );
};
export default Header;