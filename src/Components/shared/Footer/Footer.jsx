import React from "react";
import classes from './Footer.module.css'

const Footer = () => {
    return(
        <footer className={classes.footer}>
            <p>Copyright &copy;</p>
            <p>Author: Petro Rikabal Aviles</p>
            <p>{new Date().toLocaleDateString()}</p>
        </footer>
    )
}

export default Footer