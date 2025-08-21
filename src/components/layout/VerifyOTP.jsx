import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { verifyOTP } from '../../api/Api';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const email = localStorage.getItem('resetEmail');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'error' or 'success'
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');
    setLoading(true);

    try {
      const res = await verifyOTP({ email, otp });
      console.log('OTP Verification Response:', res);

      if (res.success || res.status === 'success') {
        localStorage.setItem('resetToken', res.resetToken); // ✅ Save token
        setMessageType('success');
        setMessage('OTP verified successfully! Redirecting...');
        setTimeout(() => navigate('/reset-password'), 1500);
      } else {
        setMessageType('error');
        setMessage(res.message || 'Invalid OTP');
      }
    } catch (error) {
      console.error("OTP Verify Error:", error);
      setMessageType('error');
      setMessage('Server error during OTP verification.');
    }
  };



  return (
    <Wrapper>
      <FormContainer onSubmit={handleSubmit}>
        <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
        <Title>Verify OTP</Title>
        <Input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />

        {message && (
          <Message type={messageType}>
            {message}
          </Message>
        )}

        <Button type="submit" disabled={loading}>
          {loading ? 'Verifying...' : 'Verify'}
        </Button>
      </FormContainer>
    </Wrapper>
  );
};


export default VerifyOtp;

const Message = styled.p`
  margin-bottom: 16px;
  font-size: 0.95rem;
  color: ${(props) =>
    props.type === 'error' ? 'red' : props.type === 'success' ? 'green' : '#000'};
  text-align: center;
`;

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
`;