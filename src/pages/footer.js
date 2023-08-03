import './footer.css';

const Footer =()=> {
    return (
        <div className='footer-wrapper'>
            <div className='footer-content'>
                <ul>
                    <li>
                        <a href='#'>Movies</a>
                    </li>
                    <li>
                        <a href='#'>About Us</a>
                    </li>
                    <li className='footer-link-right'>
                        <a href='top'>Back to top</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer