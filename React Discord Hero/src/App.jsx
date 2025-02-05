import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import discordBackground from './assets/discord-background.png';

function App() {
  return (
    <>
      <header className="header">
        
        <img src={discordLogo} alt="Discord Logo" className="discord-logo" />
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      </header>
      <main className="hero-section">
        <h1>IMAGINE A PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <div className="bottom-section">
        <div className="buttons">
          <button className="mac-btn">Download for Mac</button>
          <button className="open-btn">Open Discord in your browser</button>
        </div>
        <img src={discordBackground} className="discord-background" />
        </div>
      </main>
    </>
  );
}

export default App;