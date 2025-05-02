import React from 'react';
import './EventDetails.css';

const EventDetails = () => (
  <section className="event-details">
    <div className="left-image" aria-label="Barcelona fans"></div>
    <div className="details-container">
      <div className="match-time">
        <p><i className="fas fa-calendar"></i> 7<sup>th</sup> May (Wednesday)</p>
        <p><i className="fas fa-clock"></i> 12:30am - 2:00am (IST)</p>
        <p><i className="fas fa-map-marker-alt"></i> Palegaon Turf, Ambernath(E)</p>
        <p className="highlight">FIRST TIME EVER IN AMBERNATH!!</p>
      </div>
    </div>
    <div className="right-image" aria-label="Inter Milan fans"></div>
  </section>
);

export default EventDetails;
