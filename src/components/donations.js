

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './donations.css'; 

// // const DonationList = () => {
// //   const [formData, setFormData] = useState({
// //     donor_name: '',
// //     donor_email: '',
// //     donation_amount: '',
// //     message: ''
// //   });

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleDonationSubmit = async (event) => {
// //     event.preventDefault();
// //     try {
// //       console.log('Submitting donation:', formData);
// //       const response = await axios.post('http://127.0.0.1:5000/api/v1/donation/create', formData);
// //       console.log('Donation submitted:', response.data);
// //       alert('Donation submitted successfully!');
// //       setFormData({
// //         donor_name: '',
// //         donor_email: '',
// //         donation_amount: '',
// //         message: ''
// //       });
// //     } catch (error) {
// //       console.error('Donation failed:', error.response ? error.response.data : error.message);
// //       alert('Donation failed: Please check your details and try again.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <header>
// //         <h1>Hope Field Sports Academy</h1>
// //       </header>

// //       <div className="donation-container">
// //         <div className="donation-content">
// //           <h2>Bank Account Details</h2>
// //           <div className="details-content">
// //             <h3>Account Name:</h3>
// //             <p>Hope Field Sports Academy</p>
// //             <h3>Account Number:</h3>
// //             <p>123456789</p>
// //             <h3>Bank:</h3>
// //             <p>ABC Bank</p>
// //             <h3>Branch:</h3>
// //             <p>Downtown</p>
// //             <h3>SWIFT Code:</h3>
// //             <p>ABCD1234</p>
// //           </div>
// //         </div>

// //         <div className="sidebar">
// //           <h2>Donor Details</h2>
// //           <form onSubmit={handleDonationSubmit}>
// //             <div className="form-group">
// //               <label htmlFor="donorName">Your Name:</label>
// //               <input
// //                 type="text"
// //                 id="donorName"
// //                 name="donor_name"
// //                 value={formData.donor_name}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="donorEmail">Your Email:</label>
// //               <input
// //                 type="email"
// //                 id="donorEmail"
// //                 name="donor_email"
// //                 value={formData.donor_email}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="donationAmount">Donation Amount:</label>
// //               <input
// //                 type="number"
// //                 id="donationAmount"
// //                 name="donation_amount"
// //                 value={formData.donation_amount}
// //                 onChange={handleChange}
// //                 min="0"
// //                 step="0.01"
// //                 required
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="message">Message:</label>
// //               <textarea
// //                 id="message"
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //               ></textarea>
// //             </div>
// //             <button type="submit" className="submit-button">Submit</button>
// //           </form>
// //         </div>
// //       </div>

// //       <footer>
// //                 <p>&copy; 2024 Hope Field Sports Academy. All rights reserved.</p>
// //                 <p>Follow us: 
// //                     <a href="https://www.facebook.com/share/Twq8omBJeJzZ8wQs/?mibextid=qi2Omg"><i className="fab fa-facebook"></i> Facebook</a> | 
// //                     <a href="https://x.com/FieldHope63621?t=uqHTTjp-eBYYLJmP4X_k0w&s=09"><i className="fab fa-twitter"></i> Twitter</a> | 
// //                     <a href="https://instagram.com"><i className="fab fa-instagram"></i> Instagram</a>
// //                 </p> 
// //             </footer>
// //     </div>
// //   );
// // };

// // export default DonationList;


// import React, { useState } from "react";
// import axios from "axios";
// import "./donations.css";

// const DonationsList = () => {
//   const [formData, setFormData] = useState({
//     donor_name: "",
//     donor_email: "",
//     donation_amount: "",
//     message: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [showDetails, setShowDetails] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     setShowDetails(false);
//   };

//   const handlePaymentMethodSelection = (method) => {
//     setPaymentMethod(method);
//     setShowDetails(true);
//   };

//   const handleDonationSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       if (!formData.donation_amount) {
//         alert("Please enter a donation amount!");
//         return;
//       }
//       console.log("Submitting donation:", formData);
//       const response = await axios.post(
//         "http://127.0.0.1:5000/api/v1/donation/create",
//         formData
//       );
//       console.log("Donation submitted:", response.data);
//       alert("Donation submitted successfully!");
//       setFormData({
//         donor_name: "",
//         donor_email: "",
//         donation_amount: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error(
//         "Donation failed:",
//         error.response ? error.response.data : error.message
//       );
//       alert("Donation failed: Please check your details and try again.");
//     }
//   };

//   return (
//     <div className="donation-container">
//       <header>
//         <h1>Hope Field Sports Academy</h1>
//       </header>

//       <div className="donation-content">
//         <h2>Support Women with Your Donation</h2>
//         <form onSubmit={handleDonationSubmit} className="donation-form">
//           <label htmlFor="donation_amount">Enter Donation Amount:</label>
//           <input
//             type="number"
//             name="donation_amount"
//             value={formData.donation_amount}
//             onChange={handleChange}
//             placeholder="Amount in USD or UGX"
//             required
//           />

//           <h3>Choose Payment Method:</h3>
//           <div className="payment-options">
//             <button
//               type="button"
//               className={`payment-button ${
//                 paymentMethod === "mobile" ? "active" : ""
//               }`}
//               onClick={() => handlePaymentMethodSelection("mobile")}
//             >
//               Mobile Money
//             </button>
//             <button
//               type="button"
//               className={`payment-button ${
//                 paymentMethod === "bank" ? "active" : ""
//               }`}
//               onClick={() => handlePaymentMethodSelection("bank")}
//             >
//               Bank Account
//             </button>
//           </div>

//           {showDetails && paymentMethod === "mobile" && (
//             <div className="details-container">
//               <p>
//                 Send your donation of{" "}
//                 <strong>{formData.donation_amount}</strong> to:
//               </p>
//               <p className="number">0708094298 (Women in Technology)</p>
//             </div>
//           )}

//           {showDetails && paymentMethod === "bank" && (
//             <div className="details-container">
//               <p>
//                 Transfer <strong>{formData.donation_amount}</strong> to:
//               </p>
//               <p>Account Name: Hope Field Sports Academy</p>
//               <p>Account No: 123456789</p>
//               <p>Bank: ABC Bank, SWIFT: ABCD1234</p>
//             </div>
//           )}

//           <label htmlFor="donor_name">Your Name:</label>
//           <input
//             type="text"
//             name="donor_name"
//             value={formData.donor_name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             required
//           />

//           <label htmlFor="donor_email">Your Email:</label>
//           <input
//             type="email"
//             name="donor_email"
//             value={formData.donor_email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             required
//           />

//           <label htmlFor="message">Message (Optional):</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your message here..."
//           />

//           <button type="submit" className="submit-button">
//             Submit Donation
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DonationsList;

import React, { useState } from "react";

const DonationsList = () => {
  const [amountUSD, setAmountUSD] = useState("");
  const [amountUGX, setAmountUGX] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [screenshot, setScreenshot] = useState(null);
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
  });

  const handleDonationSelection = (event) => {
    if (event.target.name === "amountUSD") {
      setAmountUSD(event.target.value);
    } else if (event.target.name === "amountUGX") {
      setAmountUGX(event.target.value);
    }
    setShowDetails(false);
    setScreenshot(null);
  };

  const handlePaymentMethodSelection = (method) => {
    setPaymentMethod(method);
    setShowDetails(true);
  };

  const handleScreenshotUpload = (event) => {
    setScreenshot(event.target.files[0]);
  };

  const handleDonorInfoChange = (event) => {
    const { name, value } = event.target;
    setDonorInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!screenshot) {
      alert("Please upload a screenshot of your payment!");
    } else if (!donorInfo.name || !donorInfo.email) {
      alert("Please fill in all donor details!");
    } else {
      alert("Thank you for your donation! Your payment has been received.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <h1 style={styles.title}>Support Women with Your Donation</h1>
        <p style={styles.subtitle}>Enter your donation amount:</p>

        {/* USD Amount Field */}
        <div style={styles.amountContainer}>
          <input
            type="number"
            name="amountUSD"
            value={amountUSD}
            onChange={handleDonationSelection}
            style={styles.amountInput}
            placeholder="Amount in USD"
          />
          <span style={styles.dollarsLabel}>USD</span>
        </div>

        {/* UGX Amount Field */}
        <div style={styles.amountContainer}>
          <input
            type="number"
            name="amountUGX"
            value={amountUGX}
            onChange={handleDonationSelection}
            style={styles.amountInput}
            placeholder="Amount in UGX"
          />
          <span style={styles.dollarsLabel}>UGX</span>
        </div>

        {(amountUSD || amountUGX) && (
          <>
            <p style={styles.subtitle}>Choose a payment method:</p>
            <div style={styles.paymentContainer}>
              <button
                style={{
                  ...styles.paymentButton,
                  backgroundColor:
                    paymentMethod === "mobile" ? "#4CAF50" : "#f0f0f0",
                }}
                onClick={() => handlePaymentMethodSelection("mobile")}
              >
                Mobile Money
              </button>
              <button
                style={{
                  ...styles.paymentButton,
                  backgroundColor:
                    paymentMethod === "bank" ? "#4CAF50" : "#f0f0f0",
                }}
                onClick={() => handlePaymentMethodSelection("bank")}
              >
                Bank Account
              </button>
            </div>
          </>
        )}

        {showDetails && paymentMethod === "mobile" && (
          <div style={styles.detailsContainer}>
            <p style={styles.message}>
              Send your donation of{" "}
              <strong>
                {amountUSD ? `$${amountUSD}` : `${amountUGX} UGX`}
              </strong>{" "}
              to the number:
            </p>
            <p style={styles.number}>0708094298(Women in Technology)</p>
            <p style={styles.waitingMessage}>
              <em>We are eagerly waiting for your donation. Thank you!</em>
            </p>
          </div>
        )}

        {showDetails && paymentMethod === "bank" && (
          <div style={styles.detailsContainer}>
            <p style={styles.message}>
              Please use your bank app or website to transfer{" "}
              <strong>
                {amountUSD ? `$${amountUSD}` : `${amountUGX} UGX`}
              </strong>{" "}
              to the following account:
            </p>
            <p style={styles.number}>Bank: Stanbic , Account No: 0089562435</p>
            <p style={styles.waitingMessage}>
              <em>We appreciate your generous support!</em>
            </p>
          </div>
        )}

        {/* Donor Information Form */}
        {showDetails && (
          <div style={styles.donorInfoContainer}>
            <p style={styles.subtitle}>Donor Information:</p>
            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="text"
                name="name"
                value={donorInfo.name}
                onChange={handleDonorInfoChange}
                style={styles.inputField}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={donorInfo.email}
                onChange={handleDonorInfoChange}
                style={styles.inputField}
                placeholder="Your Email"
                required
              />
            </form>
          </div>
        )}

        {/* Form to upload payment screenshot */}
        {showDetails && (
          <div style={styles.uploadContainer}>
            <p style={styles.subtitle}>Upload a screenshot of your payment:</p>
            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="file"
                accept="image/*"
                onChange={handleScreenshotUpload}
                style={styles.fileInput}
              />
              <button type="submit" style={styles.submitButton}>
                Submit Payment Screenshot
              </button>
            </form>
            {screenshot && (
              <p style={styles.screenshotMessage}>
                <strong>Screenshot Uploaded:</strong> {screenshot.name}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    // background: "linear-gradient(135deg, #f9fafb, #e0f7fa)",
    backgroundColor: "#f7b852",

    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: " sans-serif",
  },
  contentContainer: {
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    padding: "40px",
    maxWidth: "600px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: "20px",
    color: "orange",
    marginBottom: "20px",
    fontWeight: "600",
    lineHeight: "1.2",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "15px",
  },
  amountContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px",
  },
  amountInput: {
    padding: "12px",
    fontSize: "1.1rem",
    width: "120px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    transition: "all 0.3s ease",
    outline: "none",
  },
  amountInput: {
    padding: "12px",
    fontSize: "1.1rem",
    width: "120px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    transition: "all 0.3s ease",
    outline: "none",
  },
  dollarsLabel: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#555",
    alignSelf: "center",
  },
  paymentContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  paymentButton: {
    padding: "12px 20px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer",
    width: "140px",
    transition: "all 0.3s ease",
  },
  paymentButtonHover: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  detailsContainer: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#e3f2fd",
    borderRadius: "8px",
    border: "1px solid #ddd",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  number: {
    fontSize: "16",
    fontWeight: "bold",
    color: "orange",
  },
  waitingMessage: {
    marginTop: "15px",
    color: "#4caf50",
    fontStyle: "italic",
  },
  donorInfoContainer: {
    marginTop: "40px",
  },
  inputField: {
    padding: "12px",
    fontSize: "1.1rem",
    width: "100%",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  uploadContainer: {
    marginTop: "20px",
  },
  fileInput: {
    padding: "10px",
    fontSize: "1rem",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  submitButton: {
    backgroundColor: "orange",
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "1.2rem",
  },
  screenshotMessage: {
    marginTop: "10px",
    color: "#4CAF50",
    fontSize: "1rem",
  },
};

export default DonationsList;