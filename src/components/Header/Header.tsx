import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <>
      <nav className="header-container">
        <div className="header-logo">
            <img src={logo} alt="Logo" />
        </div>
        <div className="header-links">
            <ul className="links-items">
                <li><a href="#" >Membership</a></li>
                <li><a href="#" >About Us</a></li>
                <li><a href="#" >Testimonials</a></li>
                <li><a href="#" >Sign In</a></li>
                <li><a href="#" >Get Started</a></li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
