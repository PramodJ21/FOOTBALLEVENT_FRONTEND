import React, { useState, useEffect } from "react";
import "./Register.css";

const Register = () => {
  // Load saved data from localStorage when component mounts
  const [participantCount, setParticipantCount] = useState(() => {
    const saved = localStorage.getItem("participantCount");
    return saved ? parseInt(saved, 10) : 0;
  });
  
  const [participants, setParticipants] = useState(() => {
    const saved = localStorage.getItem("participants");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [stagCount, setStagCount] = useState(() => {
    const saved = localStorage.getItem("stagCount");
    return saved ? parseInt(saved, 10) : 0;
  });
  
  const [coupleCount, setCoupleCount] = useState(() => {
    const saved = localStorage.getItem("coupleCount");
    return saved ? parseInt(saved, 10) : 0;
  });
  
  const [transactionId, setTransactionId] = useState(() => {
    return localStorage.getItem("transactionId") || "";
  });
  
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("email") || "";
  });
  
  const [screenshotFile, setScreenshotFile] = useState(null);
  const [showPayment, setShowPayment] = useState(() => {
    return localStorage.getItem("showPayment") === "true";
  });
  
  const [error, setError] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [loading, setLoading] = useState(false);


  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("participantCount", participantCount);
    localStorage.setItem("participants", JSON.stringify(participants));
    localStorage.setItem("stagCount", stagCount);
    localStorage.setItem("coupleCount", coupleCount);
    localStorage.setItem("transactionId", transactionId);
    localStorage.setItem("email", email);
    localStorage.setItem("showPayment", showPayment);
  }, [participantCount, participants, stagCount, coupleCount, transactionId, email, showPayment]);

  const resetForm = () => {
    // Clear both state and localStorage
    setParticipantCount(0);
    setParticipants([]);
    setStagCount(0);
    setCoupleCount(0);
    setTransactionId("");
    setScreenshotFile(null);
    setShowPayment(false);
    setError("");
    setPaymentError("");
    setEmail("");
    
    localStorage.removeItem("participantCount");
    localStorage.removeItem("participants");
    localStorage.removeItem("stagCount");
    localStorage.removeItem("coupleCount");
    localStorage.removeItem("transactionId");
    localStorage.removeItem("email");
    localStorage.removeItem("showPayment");
  };

  const handleParticipantChange = (e) => {
    const count = parseInt(e.target.value, 10) || 0;
    setParticipantCount(count);
    
    // Create new array with the appropriate number of participants
    // Preserve existing participant data when increasing the count
    setParticipants(prevParticipants => {
      const newParticipants = Array.from({ length: count }, (_, index) => {
        return index < prevParticipants.length
          ? prevParticipants[index]
          : { name: "", contact: "", gender: "", email: "" };
      });
      return newParticipants;
    });
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...participants];
    updated[index][field] = value;
    setParticipants(updated);
  };

  const handlePayClick = () => {
    // validate participant count vs tickets
    if (participantCount === 0){
      setError("Please enter the number of participants.");
      return;
    }
    const calculated = stagCount + coupleCount;
    
    if (calculated !== participantCount) {
      setError(
        `You've selected ${stagCount} single entry and ${coupleCount} single entry + food, totaling ${calculated} participants, but entered ${participantCount}.`
      );
      return;
    }
    // validate participant fields
    for (let i = 0; i < participants.length; i++) {
      const { name, contact, gender, email } = participants[i];
      if (!name || !contact || !gender || !email) {
        setError(`Fill all details for Participant ${i + 1}.`);
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError(`Invalid email for Participant ${i + 1}.`);
        return;
      }
      if (!/^\d{10}$/.test(contact)) {
        setError(`Invalid contact number for Participant ${i + 1}.`);
        return;
      }
    }
    setError("");
    setShowPayment(true);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (!transactionId.trim()) {
      setPaymentError("Please enter the UPI Transaction ID.");
      return;
    }
    if (!/^[a-zA-Z0-9]+$/.test(transactionId)) {
      setPaymentError("Invalid UPI Transaction ID format.");
      return;
    }
    if (transactionId.length < 5) {
      setPaymentError("UPI Transaction ID is too short.");
      return;
    }
    if (transactionId.length > 20) {
      setPaymentError("UPI Transaction ID is too long.");
      return;
    }
    if (!email.trim()) {
      setPaymentError("Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setPaymentError("Invalid email format.");
      return;
    }

    if (!screenshotFile) {
      setPaymentError("Please upload a payment screenshot.");
      return;
    }
    setPaymentError("");
  setLoading(true); // start loading

  const totalAmount = stagCount * 279 + coupleCount * 379; // Update the total amount calculation
  const formData = new FormData();
  formData.append("participants", JSON.stringify(participants));
  formData.append("email", email);
  formData.append("transactionId", transactionId);
  formData.append("amountPaid", totalAmount);
  formData.append("screenshot", screenshotFile);

  fetch("https://footballevent-backend.onrender.com/api/register", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to register");
      return res.json();
    })
    .then(() => {
      resetForm();
      alert("Registration successful! Confirmation email sent. Please check your spam folder.");
    })
    .catch(() => {
      setPaymentError("An error occurred during submission.");
    })
    .finally(() => setLoading(false)); // stop loading
  };

  const totalAmount = stagCount * 279 + coupleCount * 379; // Update the total amount calculation
  return (
    <div className="register-container">
      <h1>Register Now</h1>

      <label htmlFor="participantCount">Number of Participants:</label>
      <input
        type="number"
        id="participantCount"
        min="1"
        max="10"
        placeholder="Enter number"
        value={participantCount}
        onChange={handleParticipantChange}
      />

      {error && <div className="error-message">{error}</div>}

      <div className="participant-fields">
        {participants.map((p, i) => (
          <div key={i} className="participant-block">
            <h4>Participant {i + 1}</h4>
            <input
              type="text"
              placeholder={`Participant ${i + 1} Name`}
              value={p.name}
              onChange={(e) => handleInputChange(i, "name", e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder={`Participant ${i + 1} Contact Number`}
              value={p.contact}
              onChange={(e) => handleInputChange(i, "contact", e.target.value)}
              required
            />
            <select
              value={p.gender}
              onChange={(e) => handleInputChange(i, "gender", e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="email"
              placeholder={`Participant ${i + 1} Email`}
              value={p.email}
              onChange={(e) => handleInputChange(i, "email", e.target.value)}
              required
            />
          </div>
        ))}
      </div>

      <div className="ticket-section">
        <div>
          <label htmlFor="stagCount">Single Entry (₹279 each):</label>
          <input
            type="number"
            id="stagCount"
            min="0"
            value={stagCount}
            onChange={(e) => setStagCount(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="coupleCount">Single Entry + Food (₹379):</label>
          <input
            type="number"
            id="coupleCount"
            min="0"
            value={coupleCount}
            onChange={(e) => setCoupleCount(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="total-section">
        <h2>Total: ₹<span>{totalAmount}</span></h2>
      </div>

      <button onClick={handlePayClick} type="button">
        Pay
      </button>

      {showPayment && (
        <div className="payment-section">
          <h2>Pay via UPI</h2>
          <p>UPI ID: <strong>himanshuwankhede36@oksbi</strong></p>
          <p>GPAY Number: <strong>+91 93227 71251</strong></p>
          <img src="/gpayqr.jpeg" alt="UPI QR" className="upi-qr" />
        
          <form className="payment-form" onSubmit={handleRegisterSubmit}>
            <label htmlFor="transactionId">UPI Transaction ID:</label>
            <input
              type="text"
              id="transactionId"
              placeholder="Enter UPI Transaction ID"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              required
            />
        
            <label htmlFor="screenshot">Upload Payment Screenshot:</label>
            <input
              type="file"
              name="screenshot"
              accept="image/*"
              onChange={(e) => setScreenshotFile(e.target.files[0])}
              required
            />
        
            <label htmlFor="email">Email ID:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
        
            {paymentError && (
              <div className="error-message">{paymentError}</div>
            )}
        
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Payment Done"}
        </button>

          </form>
        </div>
      )}
      {loading && <div className="loading-overlay">Please wait...</div>}

    </div>
  );
};

export default Register;
