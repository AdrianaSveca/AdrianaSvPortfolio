import '../styles/contact.css'
import { useForm } from "@formspree/react";

function Contact() {
    const [state, handleSubmit] = useForm("meaoqggy");
    return (
        <>
            <div className="contact" id="contact">
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
                    <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" />

                        <label>Email</label>
                        <input type="email" name="email" />

                        <label>Message</label>
                        <textarea name="message"></textarea>

                        <button type="submit">{state.submitting? "Sending..." : "Send Message"}</button>
                        { state.succeeded && <p>Sent.</p>}
                    </form>

                </div>

            </div>
        </>
    )
}
export default Contact;