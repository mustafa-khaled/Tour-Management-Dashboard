import axios from "axios";

const baseURL = "https://smart-hotel-ten.vercel.app/auth/v1/";

export default axios.create({
  baseURL: baseURL,
});
