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
    const response = await api.post("/ls/addls", { stockNumber, stockType }, config);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const getAllLs = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.get("/ls/getls", config);
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}


const stockMethods = {
  addStock,
  getAllLs,
};

export default stockMethods;