import React, { useState } from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {
  const [isInCart, setIsInCart] = useState(item.isInCart);

  // 🟡 PATCH request to toggle isInCart
  function handleAddToCartClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !isInCart,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => {
        setIsInCart(updatedItem.isInCart);
        onUpdateItem(updatedItem);
      });
  }

  // 🔴 DELETE request
  function handleDeleteClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    }).then(() => onDeleteItem(item));
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
      <button className="delete" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
}

export default Item;
