import './AdminNavModule.css'
import logo from '../Image/logo.jpg';
import profile from '../Image/HomeImg/profile.png'

export default function Nav() {
    return (
      <div className='nav'>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="nav-links">
            <li><a href="Login.js">Home</a></li>
            <li><a href="Login.js">Dashboard</a></li>
            <li><a href="Login.js">Grades</a></li>
            <li><a href="Login.js">course</a></li>
          </ul>
          <div className='profile'>
            <ul className='pp'>
                <li><a href="Login.js">Name</a></li>
                <li><a href="Login.js"><img src={profile} alt='profile'/></a></li>
            </ul>

            {/* <div className="logo">
            <a href="Login.js"><img src={profile} alt='profile'/></a>
            </div> */}

          </div>
        </nav>
      </div>
    );
  }