import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Cart({ details, setDetails, price }) {
  const navigate = useNavigate();

  function handleAddMorePasenger() {
    navigate("/collectUserDetails");
  }
  function handleBookNow() {
    setDetails([]);
    navigate("/orderPage");
  }
  return (
    <div className="parent-cart">
      {details.length ? (
        <>
          {" "}
          <div className="parent-cart-div">
            {details.map((d) => {
              return (
                <div className="cart-div">
                  <div className="cardNo-cart">{d.cardNo}</div>
                  <div>Name : {d.name}</div>
                  <div>Email : {d.email}</div>
                  <div>Gender : {d.gender}</div>
                  <div>Age : {d.age}</div>
                  <div>Nationality : {d.nationality}</div>
                  <div>Price : {price}</div>
                  <button
                    className="more-passengers"
                    onClick={handleAddMorePasenger}
                  >
                    Add More Passenger
                  </button>
                </div>
              );
            })}
          </div>
          <div className="parent-cart-div1">
            <h1>Total Price</h1>
            <h2>{price * details.length} Rs</h2>
            <button onClick={handleBookNow}>Book Now</button>
          </div>{" "}
        </>
      ) : (
        <div className="parent-cart1">
          <h1>Cart Is Empty</h1>
        </div>
      )}
    </div>
  );
}
