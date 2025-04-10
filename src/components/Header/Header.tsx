import Button, { ButtonProps} from '@mui/material/Button';
import { styled }from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { FaLongArrowAltRight } from "react-icons/fa";
import './Header.css'
import logo from '../../assets/logo.png'

const HeaderCta = styled(Button)<ButtonProps>(({ theme }) => ({
  fontSize: '1.5rem',
  fontFamily: 'var(--primary-font)',
  fontWeight: 400,
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
  '&hover': {
    backgroundColor: blue[700],
  }
}));

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
            </ul>
            <HeaderCta variant="contained"  component="a"  href="#" sx={{ textTransform:  'capitalize'}}>Get Started <FaLongArrowAltRight />
            </HeaderCta>
        </div>
      </nav>
    </>
  )
}

export default Header
