import './navbar.css'

const Navbar=()=> {
    return (
        <div className='navbar-container'>    
            <div className="navbar">
                <ul>
                    <li>
                        <a href="#">Movies</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="/signup">Sign Up</a>
                    </li>
                </ul>
            </div>
            <div className='hidden-element'>
                <a name='top'></a>
            </div>
        </div>
    )
}

export default Navbar