// import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import './Header.css'

function Header () {
    return (
        <header className="header d-flex justify-content-between">
            <div>
                {/* <img src={logo} alt="Logo Kasa" style={{ height: '50px' }} /> */}
                <h1 className='logo'>KASA</h1>
            </div>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to='/'>Acceuil</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about'>A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header