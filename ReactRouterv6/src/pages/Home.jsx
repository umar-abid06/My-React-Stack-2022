import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <h3>Place Order!</h3>
      <button onClick={() => navigate("/order")}>Confirm order</button>
    </div>
  );
};
// { replace: true }
export default Home;
