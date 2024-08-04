import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <footer>
                    <nav id="nav-bar">
                        <a href="#home-page" id="footer-nav">Home</a>
                        <a href="#about-page" id="footer-nav">About</a>
                        <a href="#contact-page" id="footer-nav">Contact</a>
                    </nav>
                </footer>
                <p id="copyright">© Crewmeleon, 2024.</p>
            </div>
        </div>
    )
}

export default Footer