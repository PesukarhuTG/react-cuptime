import { Link, useSearchParams } from 'react-router-dom';
import style from './Promo.module.css';

const Promo = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <section className={style.promo}>
      <div className={style.container}>
        <div className={style.promo__container}>
          <h1 className={style.promo__title}>Попробуй новый вкус Арабики</h1>
          {category !== 'coffee' ? (
            <Link className={style.promo__link} to="/products?category=coffee">
              Перейти к&nbsp;кофе
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Promo;
