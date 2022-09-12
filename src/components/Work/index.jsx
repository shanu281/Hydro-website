import './style.css'

function Work() {
    return (

        <div className='work-container  page-display'>
            <div >
                <center>
                    <h1>Our Work</h1>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </center>
            </div>
            <div className='img-container'>
                <img className='work-img' src="work-image1.jpg" alt="image" />
                <img className='work-img' src="work-image2.jpg" alt="image" />
                <img className='work-img' src="work-image3.jpg" alt="image" />
                <img className='work-img' src="work-image4.jpg" alt="image" />
            </div>
        </div>
    )
}
export default Work;