import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './EventDetails.css';


const EventDetails = () => (
  <section className="event-details">
    <div className="left-image" aria-label="Barcelona fans"></div>
    <div className="details-container">
      <div className="match-time">
        <p><FaCalendarAlt /> 7<sup>th</sup> May (Wednesday)</p>
        <p><FaClock /> 12:30am - 2:00am (IST)</p>
        <p><FaMapMarkerAlt /> Palegaon Turf, Ambernath(E)</p>
        <p className="highlight">FIRST TIME EVER IN AMBERNATH!!</p>
      </div>
    </div>
    <div className="right-image" aria-label="Inter Milan fans"></div>
  </section>
);


export default EventDetails;
