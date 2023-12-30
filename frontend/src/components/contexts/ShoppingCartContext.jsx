import React, { createContext, useState, useContext } from "react";

const ShoppingCartContext = createContext();
import { Toaster, toast } from "sonner";

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const addToCart = (item) => {
    const isItemInCart = cart.some(
      (cartItem) => cartItem.title === item.title || cartItem.type === item.type
    );
    if (isItemInCart) {
      if (cart.some((cartItem) => cartItem.title === item.title)) {
        toast.error("Kyseinen tuote on jo ostoskorissa!");
      } else {
        toast.error("Poista valinta ostoskorista ennen uuden lisäämistä!");
      }
      return;
    }
    const newItem = { ...item, id: idCounter };
    setIdCounter(idCounter + 1);
    const updatedCart = [...cart, newItem];
    setCart(updatedCart);
    toast.success("Tuote lisätty ostoskoriin!");
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
