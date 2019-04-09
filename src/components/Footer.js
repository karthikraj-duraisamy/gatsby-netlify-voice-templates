import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Dialog Developer"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className='content has-text-centered'>
        Want to customize and build Alexa Skill or Google Actions project for your brand needs?
              <br/>
              Or do you want to get consulting for better voice apps designing?
              <br/>
              We are helping brands to create better voice experience in Alexa and Google Actions.
        </div>

        <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn-hire-us" to="/hireus">
                      Hire Us
                    </Link>
                  </div>
                </div>
      </footer>
    )
  }
}

export default Footer
