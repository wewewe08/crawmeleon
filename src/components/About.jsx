import "./About.css"

function About() {
    return(
        <div className="about" id="about-page">
            <div className="about-container">
                <div className="about-img-flex-box">
                    <img src="/speed.png" className="flex-img" alt="dashing-crawmeleon"></img>
                </div>
                <div className="about-text-flex-box">
                    <div className="header-box">
                        <h1>Welcome to Crewmeleon!</h1>
                    </div>
                    <div className="about-info">
                        <p>
                            Hi! We are Crewmeleon, an independent game developement studio based in New York. 
                            Our passion lies in creating fun and engaging experiences for everyone. 
                            We are currently working on a 4-player multiplayer game called Crawmeleon. 
                            Join us on our development journey! 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;