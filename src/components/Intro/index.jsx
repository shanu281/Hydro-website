import './style.css'

function Intro() {
    return (

        <section className="flex-1 page-display intro-display">
           
            <div className='intro'>
                <h1>Let us introduce</h1>
                <div >
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>

                <p className='line-height'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem impedit quod, nobis eveniet facere ullam exercitationem, numquam dignissimos dicta totam eum sint non itaque ea consectetur. Earum nulla commodi illo?</p>
            </div>
           
            <div className='table'>
                <p >Web Design</p>
                <p className='float-right'>80%</p>
                <progress value="80" max="100" ></progress>

                <p>Photography  </p>
                <p className='float-right'>88%</p>
                <progress value="88" max="100" ></progress>

                <p>Content Marketing </p>
                <p className='float-right'>78%</p>
                <progress value="78" max="100" ></progress>

                <p>Admin </p>
                <p className='float-right'>70%</p>
                <progress value="70" max="100" ></progress>

            </div>
            
            <div>
                <img className="intro-img" src="about-image.jpg" alt="pic" />
            </div>

        </section>


    )
}
export default Intro;