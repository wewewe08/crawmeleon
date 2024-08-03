import './Home.css';

function Home() {
  return (
    <div className="home" id="home-page">
      <img alt="logo-text" id="logo-text" src="/logo_text.png"/>
      <a href="https://crewmeleon.itch.io/crawmeleon" target="_blank" rel="noreferrer" role="button">
        <div id="download-btn">DOWNLOAD GAME</div>
      </a>
    </div>
  );
}

export default Home;
