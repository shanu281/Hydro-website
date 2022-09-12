import './style.css'

function Blog() {
    return (
        <section className='blog'>
            {/*Heading*/}
            <div className='page-display'>
                <div>
                    <center>
                        <h1>Our Blog</h1>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </center>
                </div>

                {/*Blog Cards*/}
                <div className='card-container'>
                    <div className='flex-1 card'>
                        <div className='font-0'> 
                            <img className='blog-img' src="blog-image1.jpg" alt="image" />
                        </div>
                       
                        <div className='card-info'>
                        <i class="fa-regular fa-clock"></i>
                            <small>December 28, 2020</small>
                            <h4>How To Find Beautiful Workplace</h4>
                            <p className='line-height'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ab.</p>
                            <button className='btn read-btn'>Read article</button>
                        </div>
                    </div>
                    <div className='flex-1 card'>
                        <div className='font-0'>
                            <img className='blog-img' src="blog-image2.jpg" alt="image" />
                        </div>
                        <div className='card-info'>
                        <i class="fa-regular fa-clock"></i>
                            <small>December 18, 2020</small>
                            <h4>Women Sportwear</h4>
                            <p className='line-height'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ab.</p>
                            <button className='btn read-btn'>Read article</button>
                        </div>
                    </div>
                    <div className='flex-1 card'>
                        <div className='font-0'>
                            <img className='blog-img' src="blog-image3.jpg" alt="image" />
                        </div>
                        <div className='card-info'>
                        <i class="fa-regular fa-clock"></i>
                            <small>December 12, 2020</small>
                            <h4>New Creative Fashion</h4>
                            <p className='line-height'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ab.</p>
                            <button className='btn read-btn'>Read article</button>
                        </div>
                    </div>
                    <div className=' flex-1 card'>
                        <div className='font-0'>
                            <img className='blog-img' src="blog-image4.jpg" alt="image" />
                        </div>
                        <div className='card-info'>
                        <i class="fa-regular fa-clock"></i>
                            <small>December 22, 2020</small>
                            <h4>Minimalit Design Trend In 2019</h4>
                            <p className='line-height'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ab.</p>
                            <button className='btn read-btn'>Read article</button>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}
export default Blog;