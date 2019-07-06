import React from 'react'

import logo from '../assets/images/nas-logo.png';


const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <p>The valley's leading mobile automotive repair service.</p>
    </header>
)

export default Header
