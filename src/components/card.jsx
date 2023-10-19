import { useNavigate } from "react-router";

export default function Card({ cardData, setCardNo }) {
  const navigate = useNavigate();
  function handleAddToCart() {
    setCardNo(cardData.imgName);
    navigate("/collectUserDetails");
  }
  return (
    <div className="parent-card">
      <div className="parent-card-1st">
        <img src={cardData.image} alt={cardData.imgName} />
      </div>
      <h3 className="parent-card-2nd">{cardData.imgName}</h3>
      <h2 className="add-to-cart" onClick={handleAddToCart}>
        Add To Cart
      </h2>
    </div>
  );
}
