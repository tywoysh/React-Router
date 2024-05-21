import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer">
    <Link to={"/"}>Home</Link>
    <Link to={"/blue"}>Blue Page</Link>
    <Link to={"/red"}>Red Page</Link>
    <Link to={"/green"}>Green Page</Link>
    <Link to={"/orange"}>Orange Page</Link>
  </div>
  )
}

export default Footer;