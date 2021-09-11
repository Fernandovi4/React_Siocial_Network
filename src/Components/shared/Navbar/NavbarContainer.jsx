// import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";


const mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar
  }
}

const NavbarContainer = connect (mapStateToProps, null)(Navbar)

export default NavbarContainer