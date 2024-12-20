import axios from "./axios";

export async function login(data) {
  try {
    const response = await axios.post("auth/v1/AdminLogin", data);

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function signUp(userData) {
  try {
    const response = await axios.post("auth/v1/CreateAdmin", {
      ...userData,
      isAdmin: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getCurrentUser() {
  try {
    const token = localStorage.getItem("TOKEN_ADMIN");

    if (!token) return null;

    const response = await axios.get("auth/v1/userSession", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}
