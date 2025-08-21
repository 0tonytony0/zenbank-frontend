import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { sendResetMail } from '../../api/Api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    if (!email.trim()) {
      setMessage('Email is required.');
      setMessageType('error');
      return;
    }

    setLoading(true);
    try {
      const res = await sendResetMail({ email });
      console.log("API Response:", res);

      
      if (res.success || res.status === 'success') {
        localStorage.setItem('resetEmail', email);
        setMessage('OTP sent successfully! Redirecting...');
        setMessageType('success');
        setTimeout(() => navigate('/verify-otp'), 1500);
      } else {
        setMessage(res.message || 'Failed to send OTP');
        setMessageType('error');
      }
    } catch (error) {
      console.error("Forgot Password Error:", error);
      setMessage('Server error. Please try again later.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <FormContainer onSubmit={handleSubmit}>
        <BackButton type="button" onClick={() => navigate(-1)}>← Back</BackButton>
        <Title>Forgot Password</Title>

        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {message && <Message type={messageType}>{message}</Message>}

        <Button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send OTP'}
        </Button>
      </FormContainer>
    </Wrapper>
  );
};

export default ForgotPassword;

// ---------------- Styled Components ---------------- //

const BackButton = styled.button`
  background: none;
  border: none;
  color: #2a5298;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgb(35, 156, 207), rgb(151, 205, 228));
`;

const FormContainer = styled.form`
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  text-align: center;
  color: rgb(35, 156, 207);
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: rgb(35, 156, 207);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: rgb(35, 156, 207);
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: rgb(11, 172, 241);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Message = styled.div`
  margin-bottom: 15px;
  font-size: 14px;
  color: ${({ type }) => (type === 'success' ? 'green' : 'red')};
  text-align: center;
`;