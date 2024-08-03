import { Navigate, Route, Routes } from 'react-router-dom';
import { Promo, Products, Order, Cart } from '../';

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Navigate to="/products?category=tea" />} />
        <Route
          path="/products"
          element={
            <>
              <Promo />
              <Products />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Cart />
              <Order />
            </>
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
