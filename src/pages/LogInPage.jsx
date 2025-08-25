import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"; 
import { getLogin } from "../api/Api"; 
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import './Login.css'; 

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
//   background: ${({ variant, theme }) => {
//     switch (variant) {
//       case 'outlined':
//         return 'transparent';
//       case 'green':
//         return theme.colors.green || '#28a745'; // Green background
//       case 'blue':
//         return theme.colors.blue || '#17a2b8'; // Blue background
//       default:
//         return `linear-gradient(90deg, #171313 0%, #438A9D 100%),
//                         linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`;
//     }
//   }};
//   padding: 20px;
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Poppins', sans-serif; 
  background: #0D0D2B; /* Dark navy background */
  padding: 20px;
`;

const HeaderText = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 30px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;



const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 40px 50px;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  color: white; /* Ensure text is visible */

  h2 {
    margin-bottom: 30px;
    text-align: center;
  }
`;

 
 


const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #2a5298;
  }
`;

// const Button = styled.button`
//   width: 100%;
//   background-color: #018a7e;
//   color: white;
//   padding: 12px;
//   font-size: 1rem;
//   font-weight: bold;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: 0.3s ease;

//   &:hover {
//     background-color: linear-gradient(90deg, #1d3b3d, #357474);
//   }
// `;

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
  background: linear-gradient(90deg, #4facfe 0%, #8e44ad 100%);
  box-shadow: 0 0 8px rgba(79, 172, 254, 0.5);

  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(79, 172, 254, 0.8),
                0 0 40px rgba(142, 68, 173, 0.8);
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
`;


const SignupLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 15px;
  font-size: 0.95rem;
  color: #2a5298;
  text-decoration: none;
  display: inline;

  &:hover {
    text-decoration: underline;
  }
`;

const ForgotPasswordLink = styled(Link)`
  display: block;
  text-align: right;
  margin-top: 5px;
  font-size: 0.95rem;
  color: #2a5298;
  text-decoration: none;
  // display: right;

  &:hover {
    text-decoration: underline;
  }
`;

const InputNoMargin = styled(Input)`
  margin-bottom: 0;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #ccc;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;



const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); 


  const navigate = useNavigate();

  //New  

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await getLogin({ email, password });

      if (result.status === "success") {
        // Encode token for URL safety
        const encodedToken = encodeURIComponent(result.token);

        // Redirect to dashboard with token in URL

        window.location.href = `https://dashboard.syzyky.org/auth?token=${encodedToken}&email=${encodeURIComponent(email)}`;
        // window.location.href = `http://51.20.143.202/auth?token=${encodedToken}&email=${encodeURIComponent(email)}`;
        // window.location.href = `http://35.89.212.125:3000/auth?token=${encodedToken}&email=${encodeURIComponent(email)}`;
        // window.location.href = `http://localhost:5173/auth?token=${encodedToken}&email=${encodeURIComponent(email)}`;
        // window.location.href = `http://sangamjhaprojects.dedyn.io:3000/auth?token=${encodedToken}&email=${encodeURIComponent(email)}`;

      } else {
        setError(result.message || "Invalid credentials");
      }

    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <Container>
      <HeaderText>
        <h1>Welcome Back!</h1>
        <p>Login to access your account and explore amazing features.</p>
      </HeaderText>

      <FormWrapper>
        <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
        <h2>LogIn</h2>
        <form>
          {/* Email Input */}
          <Input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />

          {/* Password Input */}
          <div style={{ position: "relative" }}>
            <InputNoMargin
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingRight: "2.5rem" }}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              disabled={loading}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                padding: 0,
              }}
            >
              {showPassword ? <FaEyeSlash size={18} color="#555" /> : <FaEye size={18} color="#555" />}
            </button>
          </div>

          {error && <p style={{ color: "red", fontSize: "0.9rem", marginTop: "5px" }}>{error}</p>}

          <ForgotPasswordLink to="/forgot-password" style={{color: "#8A2BE2"}}>Forgot Password?</ForgotPasswordLink>

          <Button type="submit" onClick={handleLogin} disabled={loading}>
            {loading ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FaSpinner className="spin" style={{ marginRight: "8px" }} />
                Signing In...
              </div>
            ) : (
              "Sign In"
            )}
          </Button>

          <p style={{ textAlign: "center", marginTop: "15px", fontSize: "0.95rem" }}>
            Don't have an account? <SignupLink to="/signup" style={{color: "#8A2BE2"}}>Sign Up</SignupLink>
          </p>
        </form>
      </FormWrapper>
    </Container>
  );

};

export default LogIn;