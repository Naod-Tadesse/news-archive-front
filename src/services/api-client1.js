import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:4000/api",
  baseURL: "https://news-archive-article-backend.onrender.com/api",
});

class APIClientText {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll = (params) => {
    const config = {
      params: params, // Pass query parameters here
    };
    return axiosInstance.get(this.endpoint, config);
  };
}

export default APIClientText;
