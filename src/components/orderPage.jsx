import { useEffect, useState } from "react";

export default function OrderPage() {
  const [orderDone, setOrderDone] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOrderDone(true);
    }, 5000);
  });
  return (
    <div className="orderPage">
      {orderDone ? (
        <>
          <h1> Ticket Booked Successfully</h1>
        </>
      ) : (
        <h1>Booking is pending... </h1>
      )}
    </div>
  );
}
