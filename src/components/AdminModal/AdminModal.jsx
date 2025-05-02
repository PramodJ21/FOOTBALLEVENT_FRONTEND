import React from 'react';
import './AdminModal.css';

const AdminModal = () => (
  <div id="adminModal" className="modal">
    <div className="modal-content">
      <span className="close">&times;</span>
      <h2>Admin Login</h2>
      <form id="adminLoginForm">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  </div>
);

export default AdminModal;
