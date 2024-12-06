import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3002",
});

export const getWellnessTip = async (moods, time) => {
  try {
    const response = await API.post("/wellness-tip", { moods, time });
    return response.data;
  } catch (error) {
    console.error("Error fetching wellness tip:", error.response?.data || error.message);
    throw new Error(error.response?.data?.error || "Failed to fetch wellness tip");
  }
};
