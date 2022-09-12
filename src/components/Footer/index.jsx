import './style.css';

function Footer() {
    return (
        <div className='footer-container '>
            <div className="all-services page-display">
                <div className="hydro">
                    <h1>Hydro Company</h1>
                    <p className='line-height'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id libero odio vitae reiciendis quia iure ducimus et, ipsum ullam sapiente vitae reiciendis quia iure ducimus et, ipsum ullam sapiente.</p>
                </div>
                <div className="company">
                    <ul >
                        <h1>Company</h1>
                        <a href="#"><li>About Us</li></a>
                        <a href="#"><li>Join Our</li></a>
                        <a href="#"> <li>Team</li></a>
                        <a href="#"> <li>Reading Blog</li></a>
                        <a href="#"><li>Press</li></a>
                    </ul>
                </div>
                <div className="services">
                    <ul>
                        <h1>Services</h1>
                        <a href="#"><li>Pricing</li></a>
                        <a href="#"><li>Documentation</li></a>
                        <a href="#"><li>Support</li></a>
                    </ul>
                </div>
                <div className="find">
                    <h1>Find Us</h1>
                    <p className='line-height'>123 Great Kailash <br />
                        Moontain, Himalaya
                    </p>
                </div>
            </div>

            <hr className='hr-2 page-display' />
            <div className=' flex-2 page-display'>
                <p>Copyright &copy; 2020 My Company </p>
                <p>Call us (+91)12345-67890</p>
                <div className='socialMedia'>
                    <a href="#"><i className="fa-brands fa-facebook" ></i></a>
                    <a href="#"><i className="fa-brands fa-twitter "></i></a>
                    <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>

        </div>
    )
}
export default Footer;