import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Order summary</h1>
      <h3>Order Confirmed</h3>
      <button onClick={() => navigate(-1)}>Go Back to Home</button>
    </>
  );
};

export default OrderSummary;
