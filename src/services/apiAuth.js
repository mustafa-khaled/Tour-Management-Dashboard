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
