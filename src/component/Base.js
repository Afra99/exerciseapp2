import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';

import Sidebar from './Sidebar'

import InputForm from "../Formulir/InputForm";
import LayoutStyles from './LayoutStyle'
import { Route } from 'react-router-dom';

//Halaman base untuk layout
const Base = ({ match }) => {
    const classes = LayoutStyles();
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        // console.log("this")
        setOpen(!open);
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            
            <Sidebar toggleDrawer={toggleDrawer} open={open} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Route path={`${match.url}/input`} component={InputForm} />
        
            </main>
        </div>
    )
};

export default Base;