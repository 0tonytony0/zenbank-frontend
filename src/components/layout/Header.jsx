// components/common/Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>MyApp</h2>
      <nav style={styles.nav}>
        {token ? (
          <button onClick={handleLogout} style={styles.btn}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/signup" style={styles.link}>Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
};

const styles = {
  header: {
    padding: "10px 20px",
    background: "#229ED9",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { color: "#fff", margin: 0 },
  nav: { display: "flex", gap: "15px" },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  btn: {
    padding: "6px 12px",
    border: "none",
    background: "#fff",
    color: "#229ED9",
    borderRadius: "6px",
    cursor: "pointer",
  }
};

export default Header;
