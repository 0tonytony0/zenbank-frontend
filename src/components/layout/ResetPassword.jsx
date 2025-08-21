import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { resetPassword } from '../../api/Api'; 
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      setMessageType('error');
      return;
    }

    setLoading(true);
    try {
      const res = await resetPassword({ password: newPassword });

      if (res.success || res.status === 'success') {
        localStorage.removeItem('resetEmail');
        localStorage.removeItem('resetToken');
        setMessage('Password reset successful! Redirecting...');
        setMessageType('success');
        setNewPassword('');
        setConfirmPassword('');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setMessage(res.message || 'Failed to reset password');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Server error during password reset');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <FormContainer onSubmit={handleReset}>
        <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
        <Title>Reset Password</Title>

        <PasswordWrapper>
          <Input
            type={showNewPassword ? 'text' : 'password'}
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <EyeButton type="button" onClick={() => setShowNewPassword((prev) => !prev)}>
            {showNewPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </EyeButton>
        </PasswordWrapper>

        <PasswordWrapper>
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <EyeButton type="button" onClick={() => setShowConfirmPassword((prev) => !prev)}>
            {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </EyeButton>
        </PasswordWrapper>

        {message && <Message type={messageType}>{message}</Message>}

        <Button type="submit" disabled={loading}>
          {loading ? 'Resetting...' : 'Reset Password'}
        </Button>
      </FormContainer>
    </Wrapper>
  );
};



export default ResetPassword;


// Styling (same as previous)


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

const PasswordWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: rgb(35, 156, 207);
  }
`;

const EyeButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
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
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  color: ${(props) => (props.type === 'error' ? 'red' : 'green')};
  margin-bottom: 10px;
  font-size: 0.95rem;
  text-align: center;
`;