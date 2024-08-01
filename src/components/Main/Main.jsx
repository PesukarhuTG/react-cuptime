import { Route, Routes } from 'react-router-dom';
import { Promo, Products } from '../';

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
              <p>Корзина</p>
            </>
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
