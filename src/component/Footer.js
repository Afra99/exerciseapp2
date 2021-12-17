import * as React from 'react';
import Link from '@material-ui/core/Link';
import "./style.css";
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
      <Typography className="tulisan" variant="body2"  align="center">
        {'Copyright © '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {

    return (
        <>
            <footer className="footer" >
               
                <Typography 
                    className = "tulisan"
                    variant="subtitle1"
                    align="center"
                    component="p"
                >
                    Aplikasi ini dibuat dengan menggunakan React JS
        </Typography>
                <Copyright />
            </footer>
        </>
    );
};
export default Footer;