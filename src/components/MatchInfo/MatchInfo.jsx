import React from 'react';
import './MatchInfo.css';
import { FaCalendarAlt, FaClock, FaDoorOpen } from "react-icons/fa";

const MatchInfo = () => (
  <section className="match-info">
    <div className="teams">
      <div className="team team-barcelona">
        <img src="/barca_logo.png" alt="Barcelona Flag" className="team-logo barcelona-logo"/>
        <span className="team-name">FC Barcelona</span>
      </div>
      
      <div className="match-details-wrapper">
      <div className="vs-text">VS</div>
      
      <div className="match-details">
        <h1 className="playwrite">
          <span>El Clásico</span>
        </h1>
      </div>
      </div>

      <div className="team team-madrid">
        <img src="/madrid_flag.png" alt="Real Madrid Flag" className="team-logo madrid-logo" />
        <span className="team-name">Real Madrid</span>
      </div>
    </div>
    
    <div className="match-stadium">
      <h2>Venue: Palegaon Turf, Ambernath(E)</h2>
      
      <div className="match-details-grid">
  <p><FaCalendarAlt /> 11 May (Sunday)</p>
  <p><FaClock /> 7:45pm - 10:00pm (IST)</p>
  <p><FaDoorOpen /> Gates open at 7:00pm</p>
</div>

      
      <p className="highlight">FIRST TIME EVER IN AMBERNATH!!</p>
      <p>Get ready for an unforgettable match under the lights!</p>
    </div>
  </section>
);

export default MatchInfo;
