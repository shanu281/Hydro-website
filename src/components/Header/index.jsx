import "./style.css";

function Header() {
    return (
        <div className="background-img">
            <div className="background-color relative">
                <div className="page-display header-text ">

                    {/* Header*/}
                    <div className="flex-1 header " >
                        <h1 className="logo">Hydro</h1>
                        <nav>
                            <ul className="nav">
                                <a href="#"><li><h3>Home</h3></li></a>
                                <a href="#"><li><h3>About</h3></li></a>
                                <a href="#"><li><h3>Our work</h3></li></a>
                                <a href="#"><li><h3>Blogs</h3></li></a>
                                <a href="#"><li><h3>Contact</h3></li></a>
                            </ul>
                        </nav>
                        <div className='socialMedia'>
                            <a href="#"><i className="fa-brands fa-facebook" ></i></a>
                            <a href="#"><i className="fa-brands fa-twitter "></i></a>
                            <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                        </div>
                        <button className="btn join ">Sign in / Join</button>
                    </div>

                    {/*Hero section*/}
                    <section >
                        <div className="flex-1 display ">
                            <div className='info-layout'>
                                <div>
                                    <p className='info'>We make beautiful<br />
                                        websites for all
                                        people
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <button className="start">Start a project</button>
                                    <p className="line-height">CALL US (+66) 010-020-3300<br /> for any enquiry</p>
                                </div>
                            </div>
                            <div>
                            <iframe width="440" height="230" src="https://www.youtube.com/embed/AqcjdkPMPJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                 </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}


export default Header;
