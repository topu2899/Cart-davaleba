import { useState } from "react";
import "./item.css";

const Item = ({ itemData, updateCartPrice }) => {
  const [itemTotal, setItemTotal] = useState(itemData.price);
  const [isPurchased, setIsPurchased] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleQuantityUpdate = (e) => {
    const newQuantity = e.target.value;
    setItemQuantity(newQuantity);
    const newTotal = itemData.price * newQuantity;
    setItemTotal(newTotal);
  };

  const handleAddToShoppingCart = () => {
    setIsPurchased(true);
    updateCartPrice((prevCartPrice) => prevCartPrice + itemTotal);
  };

  const handleRemoveFromShoppingCart = () => {
    setIsPurchased(false);
    updateCartPrice((prevCartPrice) => prevCartPrice - itemTotal);
    setItemTotal(itemData.price);
    setItemQuantity(1);
  };

  return (
    <div className="item">
      <div className="item-image">
        <img src={itemData.imgUrl} className="resp-img" alt="Product" />
      </div>
      <p>
        <b>Name:</b>
        {itemData.name}
      </p>
      <div>
        <b>Description:</b>
        <p>{itemData.description}</p>
      </div>
      {isPurchased ? (
        <>
          <p>
            <button onClick={handleRemoveFromShoppingCart}>
              Remove from cart
            </button>
          </p>
          <p>
            <b>Total Amount:</b>
            {itemTotal}$
          </p>
        </>
      ) : (
        <>
          <p>
            <b>Price:</b>
            {itemData.price}$
          </p>
          <p>
            <input
              type="number"
              className="item-quantity"
              defaultValue={1}
              min={1}
              value={itemQuantity}
              onChange={handleQuantityUpdate}
            />
          </p>
          <p>
            <b>Total Amount:</b>
            {itemTotal}$
          </p>
          <p>
            <button onClick={handleAddToShoppingCart}>Add to cart</button>
          </p>
        </>
      )}
    </div>
  );
};

export default Item;
