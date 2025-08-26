const API_URL = "https://api.syzyky.org/api/v1/aikey";

//signup page of user

// api.js or wherever your API functions are stored

export const signupUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Signup Error:", data.message || 'Server error');
      return { status: "error", message: data.message || 'Signup failed' };
    }

    return data; // example: { status: "success", token: "..." }

  } catch (error) {
    console.error("Signup API Error:", error);
    return { status: "error", message: "Network error" };
  }
};
