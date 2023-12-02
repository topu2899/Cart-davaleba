import Item from "../Item";
import { useState } from "react";
import "./itemlist.css";

const ItemList = ({ data }) => {
  const [cartPrice, updateCartPrice] = useState(0);
  return (
    <>
      <h1>Items List</h1>
      <p>
        <b>Total Price:</b>
        {cartPrice}$
      </p>
      <div id="itemlist">
        {data.map((item, index) => (
          <Item
            key={`key-${item.id}-${index}`}
            itemData={item}
            updateCartPrice={updateCartPrice}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
