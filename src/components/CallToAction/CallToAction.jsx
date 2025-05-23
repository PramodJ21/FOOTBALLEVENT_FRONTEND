import React, { useState } from 'react';
import './CallToAction.css';
import Register from '../Register/Register'; // Assuming Register is a component that handles registration

const CallToAction = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <section className="call-to-action">
        <div className="cta-container">
          <h2 className="cta-heading">WHAT ARE YOU WAITING FOR?</h2>

          {/* Updated price section */}
          <div className="cta-ticket-prices">
            <p><strong>Ticket Prices:</strong></p>
            <ul>
              <li>Single Entry Ticket – ₹279/-</li>
              <li>Single Entry + Food – ₹379/-</li>
            </ul>
          </div>

          <button className="cta-button" onClick={() => setShowRegister(true)}>
            Join the action now
          </button>
        </div>
      </section>

      {showRegister && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={() => setShowRegister(false)}>&times;</button>
            <Register />
          </div>
        </div>
      )}
    </>
  );
};

export default CallToAction;
