import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';
import cn from 'classnames';
import { useCart } from '../../context/CartContext';
import { useProducts } from '../../context/ProductContext';

const Header = () => {
  const { cart } = useCart();
  const { categoryTypes } = useProducts();
  const location = useLocation();

  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get(
      'category'
    );
    return currentCategory === category ? 'active' : '';
  };

  return (
    <header className={style.header}>
      <div className={cn(style.container, style.header__container)}>
        <Link className={style.header__logoLink} to="/">
          <img
            className={style.header__logo}
            src="/img/logo.svg"
            alt="Логотип Cup time"
          />
        </Link>

        <nav className={style.header__nav}>
          <ul className={style.header__menu}>
            {categoryTypes.length
              ? categoryTypes.map((item) => (
                  <li key={item.value} className={style.header__menuItem}>
                    <Link
                      className={cn(
                        style.header__menuLink,
                        style[getActiveClass(item.value)]
                      )}
                      to={`/products?category=${item.value}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))
              : ''}
          </ul>
        </nav>

        <div className={style.header__iconWrapper}>
          <Link className={style.header__cartLink} to="/cart">
            {cart ? cart.reduce((acc, item) => item.quantity + acc, 0) : 0}
          </Link>

          <button className={style.header__burger}>
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="9.5" width="20" height="1" fill="#D9D9D9" />
              <rect x="4" y="14.5" width="20" height="1" fill="#D9D9D9" />
              <rect x="4" y="19.5" width="20" height="1" fill="#D9D9D9" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
