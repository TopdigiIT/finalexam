import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.notFoundBox}>
        <h1 style={styles.errorCode}>404</h1>
        <p style={styles.errorMessage}>Oops! The page you are looking for does not exist.</p>
        <Link to="/" style={styles.goHomeButton}>
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "56vh",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    fontFamily: "'Arial', sans-serif"
  },
  notFoundBox: {
    textAlign: "center",
    backgroundColor: "white",
    padding: "40px 50px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    maxWidth: "400px",
    width: "100%",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  },
  errorCode: {
    fontSize: "120px",
    color: "#f44336",
    margin: "0"
  },
  errorMessage: {
    fontSize: "18px",
    color: "#555",
    margin: "20px 0"
  },
  goHomeButton: {
    display: "inline-block",
    padding: "12px 30px",
    backgroundColor: "#2196f3",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "5px",
    transition: "background-color 0.3s ease"
  }
};

// Hover/Active states
const hoverStyles = {
  notFoundBox: {
    ...styles.notFoundBox,
    transform: "scale(1.05)",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)"
  },
  goHomeButton: {
    ...styles.goHomeButton,
    backgroundColor: "#1976d2"
  }
};

const handleHoverButton = (e) => {
  e.target.style.backgroundColor = hoverStyles.goHomeButton.backgroundColor;
};

const handleHoverOutButton = (e) => {
  e.target.style.backgroundColor = styles.goHomeButton.backgroundColor;
};

export default NotFoundPage;
