import React from 'react';
import CountdownTimer from '../Countdown/Countdown';
import './Header.css';

const Header = () => (
  <header>
    <div className="header-container">
      <div className="logo-container" id="admin-login">
        <div className="logo-wrapper">
          <img src="/amigos_logo.jpeg" alt="Amigos.11 Logo" className="logo" />
        </div>
        <span className="logo-text">amigos<span className="logo-dot">.</span>11</span>
      </div>
      
      <div className="teams-mini">
        <div className="team-mini barca">
          <img src="/barca_logo.png" alt="Barcelona" className="team-mini-logo" />
          <span className="team-mini-name">FCB</span>
        </div>
        <div className="versus-mini">VS</div>
        <div className="team-mini inter">
          <img src="/milan_logo.png" alt="Inter Milan" className="team-mini-logo" />
          <span className="team-mini-name">INT</span>
        </div>
      </div>
      
      <div className="timer-container">
        <h2>MATCH COUNTDOWN</h2>
        <div id="countdown" className="countdown">
          <CountdownTimer />
        </div>
      </div>
    </div>
    
    <div className="header-accent"></div>
  </header>
);

export default Header;