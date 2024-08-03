import { Link } from 'react-router-dom';
import style from './Promo.module.css';

const Promo = () => (
  <section className={style.promo}>
    <div className={style.container}>
      <div className={style.promo__container}>
        <h1 className={style.promo__title}>Попробуй новый вкус Арабики</h1>
        <Link className={style.promo__link} to="/products?category=coffee">
          Перейти к&nbsp;кофе
        </Link>
      </div>
    </div>
  </section>
);

export default Promo;
