import './navbar.css'

const Navbar=({scrollTop})=> {
    return (
        <div className='navbar-container'>    
            <div className="navbar-nobootstrap">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#">Movies</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li className='nav-link-right'>
                        <a href="/signup">Sign Up</a>
                    </li>
                </ul>
            </div>
            {scrollTop ?
            <div className='hidden-element'>
                <a name='top'></a>
            </div>
            : null}
        </div>
    )
}

Navbar.defaultProps={scrollTop: true}

export default Navbar