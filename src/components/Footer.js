import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            
            <ul className="icons">
                <li><a src="https://www.facebook.com/pages/category/Automotive--Aircraft---Boat/Newell-Auto-Service-629173440930110/" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Newell Auto Service 2019</p>
    </footer>
)

export default Footer
