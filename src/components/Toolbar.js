import React from "react";
import { useSelector } from "react-redux";

export default function Toolbar() {
  const numProducts = useSelector(selectNumberOfProducts);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="toolbar">
      Number of products in cart: {numProducts} total price: €{totalPrice}
    </div>
  );
}

function selectNumberOfProducts(reduxState) {
  return reduxState.cart.length;
}

function selectTotalPrice(reduxState) {
  const prices = reduxState.cart.map((idOfProduct) => {
    const found = reduxState.dinos.find((dino) => {
      return dino.id === idOfProduct;
    });
    return found.price;
  });

  return prices.reduce((a, b) => a + b, 0);
}
