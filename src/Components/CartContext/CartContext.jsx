import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();


export const useCart = () => {
  return useContext(CartContext);
};


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems)

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const cartSize = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartSize }}>
      {children}
    </CartContext.Provider>
  );
};
