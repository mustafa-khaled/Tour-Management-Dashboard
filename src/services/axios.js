import axios from "axios";

const baseURL = "https://smart-hotel-ten.vercel.app/";

export default axios.create({
  baseURL: baseURL,
});
