import React from 'react';
import './MatchInfo.css';

const MatchInfo = () => (
  <section className="match-info">
    <div className="teams">
      <div className="team team-barca">
        <img src="/barca_logo.png" alt="Barcelona Logo" className="team-logo" />
      </div>
      <div className="match-details">
        <h1 className="playwrite">
          <span>FC Barcelona vs Inter Milan</span><br />
          <span>UCL - 2<sup>nd</sup> Leg</span>
        </h1>
      </div>
      <div className="team team-milan">
        <img src="/milan_logo.png" alt="Inter Milan Logo" className="team-logo" />
      </div>
    </div>
    <div className="match-stadium">
    <p><i className="fas fa-calendar"></i> 7<sup>th</sup> May (Wednesday)</p>
        <p><i className="fas fa-clock"></i> 12:30am - 2:00am (IST)</p>
      <h2>Venue: Palegaon Turf, Ambernath(E)</h2>
        <p className="highlight">FIRST TIME EVER IN AMBERNATH!!</p>
      <p>Get ready for an unforgettable match under the lights!</p>
    </div>
  </section>
);

export default MatchInfo;
