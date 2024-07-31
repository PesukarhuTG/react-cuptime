import style from './Header.module.css';
import cn from 'classnames';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={cn(style.container, style.header__container)}>
        <a className={style.header__logoLink} href="/">
          <img
            className={style.header__logo}
            src="/img/logo.svg"
            alt="Логотип Cup time"
          />
        </a>

        <nav className={style.header__nav}>
          <ul className={style.header__menu}>
            <li className={style.header__menuItem}>
              <a className={style.header__menuLink} href="#">
                Чай
              </a>
            </li>
            <li className={style.header__menuItem}>
              <a className={style.header__menuLink} href="#">
                Кофе
              </a>
            </li>
            <li className={style.header__menuItem}>
              <a className={style.header__menuLink} href="#">
                Чайники
              </a>
            </li>
            <li className={style.header__menuItem}>
              <a className={style.header__menuLink} href="#">
                Турки
              </a>
            </li>
            <li className={style.header__menuItem}>
              <a className={style.header__menuLink} href="#">
                Прочее
              </a>
            </li>
          </ul>
        </nav>

        <div className={style.header__iconWrapper}>
          <a className={style.header__cartLink} href="cart.html">
            6
          </a>

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
