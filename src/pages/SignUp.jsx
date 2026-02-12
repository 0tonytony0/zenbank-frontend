import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../api/SignUpApi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  background: ${({ theme }) => theme.colors.background};
  padding: 20px;
`;

const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 40px 50px;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  backdrop-filter: blur(8px);
  color: white;

  h2 {
    margin-bottom: 30px;
    text-align: center;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 50px; /* Rounded edges */
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: white;

  /* Gradient Background */
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  box-shadow: ${({ theme }) => theme.shadows.glow};

  transition: all 0.3s ease;

  &:hover {
    box-shadow:
      0 0 20px rgba(79, 172, 254, 0.8),
      0 0 40px rgba(142, 68, 173, 0.8);
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const LoginLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Password and Confirm Password do not match.");
      return;
    }

    try {
      setLoading(true);
      const result = await signupUser({
        fullName,
        email,
        password,
        confirmPassword,
      });

      if (
        result.status === "success" ||
        result.message?.toLowerCase().includes("created")
      ) {
        navigate("/login");
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setErrorMessage(result.message || "Signup failed.");
      }
    } catch (error) {
      setErrorMessage("Signup failed due to a network error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <Input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password Field */}
          <div style={{ position: "relative" }}>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#888",
              }}>
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div style={{ position: "relative" }}>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#888",
              }}
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={18} />
              ) : (
                <FaEye size={18} />
              )}
            </button>
          </div>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <Button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </Button>
          <p style={{ textAlign: "center", marginTop: "15px" }}>
            Already have an account?{" "}
            <LoginLink to="/login" style={{ color: "#8A2BE2" }}>
              Log In
            </LoginLink>
          </p>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Signup;
