// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="header-wave-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="header-wave-img"
      />
      <h1 className="header-heading">Wave</h1>
    </div>
    <ul className="nav-list-container">
      <Link to="/">
        <li className="nav-list-item ">Home</li>
      </Link>
      <Link to="/about">
        <li className="nav-list-item ">About</li>
      </Link>
      <Link to="/contact">
        <li className="nav-list-item ">Contact</li>
      </Link>
    </ul>
  </nav>
)

export default Header
