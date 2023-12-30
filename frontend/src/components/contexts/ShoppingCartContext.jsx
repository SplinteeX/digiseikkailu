import React, { createContext, useState, useContext, useEffect } from "react";
import { Toaster, toast } from "sonner";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [idCounter, setIdCounter] = useState(1);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
    const newItem = { ...item, id: idCounter, quantity: 1 };
    setIdCounter(idCounter + 1);
    const updatedCart = [...cart, newItem];
    setCart(updatedCart);
    toast.success("Tuote lisätty ostoskoriin!");
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartItemQuantity }}
    >
      {children}
      <Toaster richColors closeButton />
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
