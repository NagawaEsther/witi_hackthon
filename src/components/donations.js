import React, { useState } from "react";
import { FaCopy } from "react-icons/fa"; // Importing copy icon from react-icons

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
  const [copySuccess, setCopySuccess] = useState(""); // State for copy feedback

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

  // Function to handle copying phone number to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => setCopySuccess("Copied!"),
      (err) => setCopySuccess("Failed to copy!")
    );
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
            <div style={styles.copyContainer}>
              <p
                style={styles.number}
                onClick={() => copyToClipboard("0708094298")}
              >
                0708094298 (Women in Technology)
              </p>
              <FaCopy
                onClick={() => copyToClipboard("0708094298")}
                style={styles.copyIcon}
              />
            </div>
            {copySuccess && (
              <p style={styles.copySuccessMessage}>{copySuccess}</p>
            )}
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
    backgroundColor: "#f7b852",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "sans-serif",
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
    border: "1px solid #ddd", // Keeping original border style
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
    padding: "12px 30px",
    fontSize: "1.2rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  detailsContainer: {
    marginTop: "30px",
  },
  copyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  copyIcon: {
    marginLeft: "10px",
    cursor: "pointer",
    color: "#333",
  },
  number: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#2f7c29",
    cursor: "pointer",
    userSelect: "none",
    marginTop: "10px",
  },
  message: {
    fontSize: "1.1rem",
    color: "#333",
  },
  waitingMessage: {
    marginTop: "20px",
    fontStyle: "italic",
    color: "#666",
  },
  donorInfoContainer: {
    marginTop: "30px",
  },
  inputField: {
    padding: "12px",
    fontSize: "1.1rem",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #ddd",
    marginBottom: "15px",
  },
  uploadContainer: {
    marginTop: "30px",
  },
  fileInput: {
    padding: "10px",
    fontSize: "1.1rem",
    width: "100%",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  submitButton: {
    backgroundColor: "#f7b852",
    padding: "12px 25px",
    fontSize: "1.1rem",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
  },
  copySuccessMessage: {
    color: "green",
    fontSize: "1rem",
    marginTop: "10px",
  },
  screenshotMessage: {
    fontSize: "1.1rem",
    color: "#555",
    marginTop: "10px",
  },
};

export default DonationsList;

