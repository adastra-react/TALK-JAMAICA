import React from 'react';
import './Header.css';
import JTLogo from "./images/jt-logo.png"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="header-login-signip">
            <div className="header-limiter">
                <div className="nav-cont">
                    <div>
                        <Link>
                            <img className="header-logo" src={JTLogo} alt=""/>
                        </Link>
                    </div>

                    <nav className="nav">
                        <Link className="nav-link" to="/home"><p>Home</p></Link>
                        <Link className="nav-link" to="/about"><p>About</p></Link>
                        <Link className="nav-link" to="contact"><p>Contact</p></Link>
                    </nav>
                </div>
                
                <div className="">
                    <Link className="auth-link login-link" to="/login">Login</Link>
                    <Link className="auth-link signup-link" to="signup">Sing up</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;
