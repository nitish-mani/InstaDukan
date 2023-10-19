import { Outlet, useNavigate } from "react-router";
import { useState } from "react";

export default function Header({ count }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="header-div">
        <h1>Ferry Wala</h1>
        <h2 className="home-h2" onClick={() => navigate("/")}>
          Home
        </h2>
        <h2 className="cart-h2" onClick={() => navigate("/cart")}>
          Cart({count})
        </h2>
      </div>
      <Outlet></Outlet>
    </>
  );
}
