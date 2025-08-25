const API = "https://api.syzyky.org/api/v1/aikey";

//login page of user

export const getLogin = async (credentials) => {
  try {
    const response = await fetch(`${API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert(errorData.message || "Something went wrong on server.");
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    alert("Could not connect to server.");
    return null;
  }
};

export const sendResetMail = async (data) => {
  try {
    const res = await fetch('https://api.syzyky.org/api/v1/aikey/forget-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.error("Send Mail Error:", err);
    return { success: false, message: "Server error" };
  }
};


export const verifyOTP = async (data) => {
  try {
    const res = await fetch('https://api.syzyky.org/api/v1/aikey/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.error("Verify OTP Error:", err);
    return { success: false, message: "Server error" };
  }
};

export const resetPassword = async (data) => {
  const token = localStorage.getItem('resetToken'); // ✅ Get from storage

  if (!token) {
    return { success: false, message: 'No token found. Please try again.' };
  }

  try {
    const res = await fetch(`https://api.syzyky.org/api/v1/aikey/reset-password/${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),  // { email, password }
    });

    return await res.json();
  } catch (err) {
    console.error("Reset Password Error:", err);
    return { success: false, message: "Server error" };
  }
};