import { useState } from "react";
import Card from "./card";

export default function Home({ data, setCardNo }) {
  return (
    <div className="parent-div">
      <div className="card-div">
        {data.map((d, i) => {
          return <Card cardData={d} key={i} setCardNo={setCardNo} />;
        })}
      </div>
    </div>
  );
}
