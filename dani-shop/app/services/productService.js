import axios from "axios";

const baseUrl = "https://fakestoreapi.com";

// Get products
export const getProducts = () => {
    return axios.get(`${baseUrl}/products`);
  };