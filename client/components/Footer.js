import React from 'react'
import {Link} from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import AccountBoxIcon from '@material-ui/icons/AccountBox'

const Footer = () => (
  <div className="footer">
    <div className="footer-name">Copyright © 2020 Fetch</div>
    <div className="sub-footer">
      <BottomNavigationAction
        component={Link}
        to="/home"
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/about"
        label="About"
        icon={<InfoIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/login"
        label="Login"
        icon={<InfoIcon />}
      />
    </div>
  </div>
)

export default Footer
