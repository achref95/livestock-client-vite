import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL
});

const addStock = async ({ stockNumber, stockType }) => {
  try {
    const token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.post("/addls", { stockNumber, stockType }, config);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};


const stockMethods = {
  addStock,
};

export default stockMethods;