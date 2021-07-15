import React from "react"

function Header () {
    return (
        <header>     
    
            <div className="header-section">
                
            <div className="header-logo-profile"> 
                <img src="images/profile.png"/> 
            </div>
            <div className="header-logo"> 
                <img src="/images/logo.png" alt="Logo"/> 
            </div>
            <div className="header-logo-dropdown"> 
                <img src="images/dropdown-menu.png"/> 
            </div>
            
            <nav> 
                <ul> 
                    <li className="nav-li">About</li>
                    <li className="nav-li">Why Us</li>
                    <li className="nav-li">Programs</li>
                    <li className="nav-li">Testimonials</li>
                </ul>
                <a href="#"  className="action-btn"> Request a free demo</a>
                <img src="images/profile.png" className="profile-pic"/>
            </nav>
            
            </div>
            
        </header>
    )
}


export default Header