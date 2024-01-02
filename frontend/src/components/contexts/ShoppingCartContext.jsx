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
    const isItemInCart = cart.some((cartItem) => cartItem.title === item.title);
    const isSubscriptionInCart = cart.some(
      (cartItem) => cartItem.type === "subscription"
    );
    if (isItemInCart) {
      toast.error("Tuote on jo ostoskorissa! Poista se sieltä ensin.");
      return;
    }
    if (isSubscriptionInCart && item.type === "subscription") {
      toast.error("Samankaltainen tuote on jo ostoskorissa!");
      return;
    }
    const newItem = { ...item, id: idCounter, quantity: 1 };
    setIdCounter(idCounter + 1);
    if (item.type === "subscription") {
      newItem.months = 1;
    }
    if (item.title === "Oppilaitos") {
      newItem.teachers = 1;
    }
    const updatedCart = [...cart, newItem];
    setCart(updatedCart);
    toast.success("Tuote lisätty ostoskoriin!");
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
    toast.success("Tuote poistettu ostoskorista!");
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

  const incrementCartItemQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decrementCartItemQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const incrementCartItemTeachers = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.title === "Oppilaitos") {
        return { ...item, teachers: item.teachers + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decrementCartItemTeachers = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (
        item.id === itemId &&
        item.title === "Oppilaitos" &&
        item.teachers > 1
      ) {
        return { ...item, teachers: item.teachers - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const addMonthsToCartItem = (itemId, months) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.type === "subscription") {
        return { ...item, months: months };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const incrementCartItemMonths = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.type === "subscription") {
        return { ...item, months: item.months + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decrementCartItemMonths = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (
        item.id === itemId &&
        item.type === "subscription" &&
        item.months > 1
      ) {
        return { ...item, months: item.months - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        incrementCartItemTeachers,
        decrementCartItemTeachers,
        getTotalPrice,
        addMonthsToCartItem,
        incrementCartItemMonths,
        decrementCartItemMonths,
      }}
    >
      {children}
      <Toaster richColors closeButton />
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
