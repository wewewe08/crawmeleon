import "./Contact.css"

function Contact() {
    return (
        <div className="contact-container" id="contact-page">
            <div className="contact-text-flex-box">
                <div className="header-box">
                    <h1>Get in contact with us!</h1>
                </div>
                <div className="contact-info-container">
                    <p>
                        Follow us on social media or send us an email! We'd love to hear from you.
                    </p>
                    <div className="info-text">
                        <a href="https://x.com/crewmeleon" target="_blank" rel="noreferrer" role="button">
                            <img id="flex-social" alt="twitter" src="/twitter.svg"></img>
                        </a>
                        <a href="https://www.instagram.com/crewmeleon?igsh=cHM1aDZpMzF2ZnBu" target="_blank" rel="noreferrer" role="button">
                            <img id="flex-social" alt="instagram" src="/instagram.svg"></img>
                        </a>
                        <a href="mailto:crewmeleon@gmail.com" target="_blank" rel="noreferrer" role="button">
                            <img id="flex-social" alt="email" src="/email.svg"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;