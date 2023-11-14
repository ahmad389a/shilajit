
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Coupons = () => {
  const [coupon, setCoupon] = useState(null);
  const [couponName, setCouponName] = useState(''); 

  useEffect(() => {
    const fetchCoupon = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/coupons/${couponName}`);
        console.log( response.data);
        // setCoupon(response.data);
      } catch (error) {
        console.error(error);
        // Handle errors, e.g., show an error message to the user
      }
    };

    fetchCoupon();
  }, [couponName]); 

};
  export default Coupons;