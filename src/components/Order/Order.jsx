import style from './Order.module.css';
import cn from 'classnames';

const Order = () => {
  return (
    <section className={style.order}>
      <div className={style.container}>
        <h2 className={style.order__title}>Доставка</h2>
        <form className={style.order__form}>
          <input
            className={style.order__input}
            type="text"
            placeholder="Имя"
            name="name"
          />
          <input
            className={style.order__input}
            type="text"
            placeholder="Телефон"
            name="phone"
          />
          <input
            className={cn(style.order__input, style.order__input_address)}
            type="text"
            placeholder="Адрес"
            name="address"
          />

          <fieldset className={style.order__payment}>
            <h3 className={style.order__paymentTitle}>Оплата:</h3>
            <label className={style.order__paymentLabel}>
              <input
                className={style.order__radio}
                type="radio"
                name="payment"
                value="card"
              />
              Картой
            </label>
            <label className={style.order__paymentLabel}>
              <input
                className={style.order__radio}
                type="radio"
                name="payment"
                value="cash"
                defaultChecked
              />
              Наличные
            </label>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Order;
