import './Home.css';
import ParticlesComponent from "./ParticlesComponent.js"

function Home() {
  return (
    <div className="home" id="home-page">
      <img alt="logo-text" id="logo-text" src="/logo_text.png"/>
      <a href="https://crewmeleon.itch.io/crawmeleon" target="_blank" rel="noreferrer" role="button" id="download-btn-container">
        <img src="/sleeping.svg" className="top-img" alt="sleeping-crawmeleon"></img>
        <p id="download-btn">PLAY NOW</p>
      </a>
      <div class="home-wave">
        <img alt="wave" src="/wave.svg"></img>
      </div>
      <ParticlesComponent />
    </div>
  );
}

export default Home;
