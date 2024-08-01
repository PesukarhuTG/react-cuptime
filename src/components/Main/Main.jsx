import { Route, Routes } from 'react-router-dom';
import { Promo, Products, Order, Cart } from '../';

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route
          path="/"
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
