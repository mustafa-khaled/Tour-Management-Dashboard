import axios from "./axios";

export async function getTours(page = 1) {
  const token = localStorage.getItem("TOKEN_ADMIN");

  try {
    const response = await axios.get(`trip/v1/GetAllTrips?page=${page}`, {
      headers: {
        access_token: token,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to get tours!");
  }
}

export async function createTour(data) {
  const token = localStorage.getItem("TOKEN_ADMIN");

  try {
    const response = await axios.post("trip/v1/AddTrip", data, {
      headers: {
        access_token: token,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to create tour!");
  }
}

export async function updateTour({ data, id }) {
  const token = localStorage.getItem("TOKEN_ADMIN");

  try {
    const response = await axios.put(`trip/v1/UpdateTrip/${id}`, data, {
      headers: {
        access_token: token,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to create tour!");
  }
}

export async function deleteTour(id) {
  const token = localStorage.getItem("TOKEN_ADMIN");

  try {
    const response = await axios.delete(`trip/v1/DeleteOnTripById/${id}`, {
      headers: {
        access_token: token,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to create tour!");
  }
}
