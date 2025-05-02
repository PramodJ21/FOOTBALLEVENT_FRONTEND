import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/participants");
        const data = await response.json();
        setParticipants(data);
      } catch (error) {
        console.error("Error fetching participants:", error);
      }
    };

    fetchParticipants();
  }, []);

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <p className="subtitle">List of Registered Participants</p>

      <table className="participant-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Amount</th>
            <th>Screenshot</th>
            <th>QR Code</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr key={index}>
              <td>{participant.name}</td>
              <td>{participant.email}</td>
              <td>{participant.contact}</td>
              <td>₹{participant.amount}</td>
              <td>
                <a href={`/uploads/${participant.screenshot}`} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </td>
              <td>
                <a href={`/qrcodes/${participant.qrCode}`} target="_blank" rel="noopener noreferrer">
                  QR
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
