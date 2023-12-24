import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL
});

const addStock = async ({ stockNumber, stockType, age, comment }) => {
  try {
    const token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.post("/livestock/addls", { stockNumber, stockType, age, comment }, config);
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
    const response = await api.get("/livestock/getls", config);
    return response.data
  } catch (error) {
    console.log(error)
  }
};

const getOneLs = async ({ stockNumber }) => {
  try {
    const token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        stockNumber: stockNumber,
      },
    };
    const response = await api.get("/livestock/getone", config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getOneLsDetail = async ({ stockId }) => {
  try {
    const token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.get(`/livestock/getls/${stockId}`, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

const updateLs = async ({ stockId, stockNumber, stockType, comment }) => {
  try {
    const token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.put(`/livestock/getls/${stockId}/update`, {stockNumber, stockType, comment}, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

const deleteLs = async ({ stockId }) => {
  try {
    const token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.delete(`livestock/getls/${stockId}/delete`, config)
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}




const stockMethods = {
  addStock,
  getAllLs,
  getOneLs,
  getOneLsDetail,
  updateLs,
  deleteLs,
};

export default stockMethods;