// src/utils/fetchFromAPI.js

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const API_KEY = "AIzaSyBZq61l89gZb-ykky9jDNiSh62p6Q-FTxw"; // Replace with your real key

export const fetchFromAPI = async (url) => {
    try {
      const res = await fetch(`${BASE_URL}/${url}&key=${API_KEY}`);
      const data = await res.json();
      console.log("API RESPONSE:", data);
      return data;
    } catch (error) {
      console.error("API fetch error:", error);
    }
  };
