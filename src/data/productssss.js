import React, { useEffect } from "react";
import axios from "axios";

const products = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      console.log("Product data:", response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  useEffect(()=>{
    fetchData();
  },[]);
};

export default products;
