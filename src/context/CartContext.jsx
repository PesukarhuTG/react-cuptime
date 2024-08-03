import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const storeCart = JSON.parse(localStorage.getItem('cart_ct') || '[]');
    setCart(storeCart);
  }, []);

  useEffect(() => {
    if (Array.isArray(cart)) {
      localStorage.setItem('cart_ct', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product, quantity) => {
    const newCart = [...cart];

    //checking: is product in the cart?
    const itemIndex = newCart.findIndex((item) => item.id === product.id);

    if (itemIndex >= 0) {
      newCart[itemIndex].quantity += quantity;
    } else {
      newCart.push({ ...product, quantity });
    }

    setCart(newCart);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    // if 0 we will delete product
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// our own hook
export const useCart = () => useContext(CartContext);
