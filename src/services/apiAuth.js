import axios from "./axios";

export async function login(data) {
  try {
    const response = await axios.post("login", data);

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function signUp(userData) {
  try {
    const response = await axios.post("SignUp", { ...userData, isAdmin: true });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getCurrentUser() {
  try {
    const token = localStorage.getItem("TOKEN_ADMIN");

    if (!token) return null;

    const response = await axios.get("userSession", token);

    console.log("response", response);

    return response.user;
  } catch (error) {
    throw error;
  }
}
