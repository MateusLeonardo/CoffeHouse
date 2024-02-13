import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();


export const useCart = () => {
  return useContext(CartContext);
};


export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(()=> {
    const itemsLocalStorage = JSON.parse(localStorage.getItem('cartItems'));
    return itemsLocalStorage || []
  });


  useEffect(()=>{
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  },[cartItems])

  const addToCart = (item) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
  
    if (itemIndex !== -1) {
      // Se o item já estiver no carrinho, atualize apenas a quantidade
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantidade += 1;
      setCartItems(updatedCartItems);
    } else {
      // Se o item não estiver no carrinho, adicione o item com a quantidade especificada
      setCartItems([...cartItems, { ...item, quantidade: 1 }]);
    }
  };

  const removeFromCard = (id) => {
    const updateCard = cartItems.filter(item => item.id !== id);
    setCartItems(updateCard);
  }

  const updateCartItemQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const updatedQuantity = item.quantidade + quantity;
        return { ...item, quantidade: updatedQuantity >= 0 ? updatedQuantity : 0 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const cartSize = cartItems.reduce((total, item) => total + item.quantidade, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartSize, removeFromCard, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
