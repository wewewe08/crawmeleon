import "./Header.css"

function Header() {
    return(
        <nav className="nav">
            <img src="/icon.png" className="logo" alt="logo"></img>
            <ul className="nav-items">
                <a href="#home-page">Home</a>
                <a href="#about-page">About</a>
                <a href="#App">Contact</a>
            </ul>
        </nav>
    )
}

export default Header;