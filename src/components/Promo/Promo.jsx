import style from './Promo.module.css';

const Promo = () => (
  <section className={style.promo}>
    <div className={style.container}>
      <div className={style.promo__container}>
        <h1 className={style.promo__title}>Попробуй новый вкус Арабики</h1>
        <a className={style.promo__link} href="#">
          Перейти к&nbsp;кофе
        </a>
      </div>
    </div>
  </section>
);

export default Promo;
