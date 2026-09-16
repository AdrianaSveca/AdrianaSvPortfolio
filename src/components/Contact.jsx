
function Contact() {
    return (
        <>
            <div className="contact">
                <div className="contactHeading">
                    <p>05 / contact</p>
                    <h1>Let's Talk</h1>
                    <p className="contactParagraph">
                        Open to internships, graduate roles, freelance projects, and interesting conversations.
                    </p>
                </div>
                <div className="contactLinks">
                    <div className="contactLink">
                        <h5>EMAIL</h5>
                        <a href="">svecaadriana05@gmail.com</a>
                    </div>
                    <div className="contactLink">
                        <h5>LINKEDIN</h5>
                        <a href="">svecaadriana05@gmail.com</a>
                    </div>
                    <div className="contactLink">
                        <h5>GITHUB</h5>
                        <a href="">svecaadriana05@gmail.com</a>
                    </div>
                </div>
                <div className="contactForm">
                    <form>
                        <label>Name</label>
                        <input type="text" />

                        <label>Email</label>
                        <input type="email" />

                        <label>Message</label>
                        <textarea></textarea>

                        <button type="submit">Send Message</button>
                    </form>

                </div>

            </div>
        </>
    )
}
export default Contact;