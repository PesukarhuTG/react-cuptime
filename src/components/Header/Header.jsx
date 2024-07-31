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

        <a className={style.header__cartLink} href="cart.html">
          6
        </a>
      </div>
    </header>
  );
};

export default Header;
