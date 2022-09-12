import './style.css'

function Contact() {
    return (
        <section className='background-color-2 page-display padding'>
            <div className='heading'>
                <center><h1>Contact Us</h1></center>
            </div>
            <div >
                <center>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </center>
            </div>

            <div className='contact-container'>
                <form>
                    <input type="text" placeholder='Full Name' />
                    <input type="email" name="email" id="float" placeholder='Your Email' /><br />
                    <input type="text" placeholder='Your Phone' />
                    <input type="text" id='float' placeholder='Budget Level' /><br />
                    <input type="details" name="details" id="details" placeholder='Your Requirements' /><br />
                    <button className='btn join'>Send Message</button>

                </form>


                <div className='contact-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14329.920338605354!2d91.7765197811144!3d26.115885285633915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5ed0e6e79599%3A0x2022334ad7a725c6!2sBhetapara%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1662620112905!5m2!1sen!2sin"
                        width="300"
                        height="300"
                        style={{ border: "0", borderRadius: "50%" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>

            </div>

        </section>
    )
}
export default Contact;