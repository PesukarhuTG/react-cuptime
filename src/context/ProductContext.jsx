import { createContext, useContext, useEffect, useState } from 'react';
import { API_URL } from '../const';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (category) {
      fetch(`${API_URL}/api/products/${category}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json();
        })
        .then((data) => setProducts(data))
        .catch((err) => console.error('Error fetch products: ', err));
    }
  }, [category]);

  return (
    <ProductContext.Provider value={{ products, setCategory }}>
      {children}
    </ProductContext.Provider>
  );
};

// our own hook
export const useProducts = () => useContext(ProductContext);
