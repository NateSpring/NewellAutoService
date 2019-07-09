import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/background.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Newell Auto Service" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Us</h2>
                </header>
                <p>Newell auto service is a mobile service and is your car care specialist from basic service needs to engine replacements, check engine light diagnostics and performance upgrades we can do it all. Send us a message for your quote today!
</p>
                <ul className="actions">
                  <li><a href="https://www.facebook.com/Newell-Auto-Service-629173440930110/" className="button">Find Us on FaceBook</a></li>
                </ul>
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Contact Us</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-phone"></span>
                <h3>Phone</h3>
                <p><a href="tel:209-743-1234">209-743-1234</a></p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Email</h3>
                <p><a href="mailto:tim_newelljr@yahoo.com">Email: Newell Auto Service</a></p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Online Appointments</h2>
              <p>Thursday at 4pm work best? Let us know below and we can work out the best time and place to fix your automobile! Please provide the Year, Make, Model and any information you feel we should know.</p>
            </header>
              
            <form
  name="contact"
  method="post"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
  <div className="field half first">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" />
  </div>
  <div className="field half">
    <label htmlFor="email">Email</label>
    <input type="text" name="email" id="email" />
  </div>
  <div className="field">
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" rows="6" />
  </div>
  <ul className="actions">
    <li>
      <input type="submit" value="Send Message" className="special" />
    </li>
    <li>
      <input type="reset" value="Clear" />
    </li>
  </ul>
</form>







          </section>
        </div>

      </Layout>
    )
  }
}

export default Index
