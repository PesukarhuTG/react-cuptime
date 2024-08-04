import { useOrder } from '../../context/OrderContext';
import style from './Order.module.css';
import cn from 'classnames';

const Order = () => {
  const { orderDetails, updateOrderDetails } = useOrder();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateOrderDetails(name, value);
  };

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
            value={orderDetails.name}
            onChange={handleChange}
          />
          <input
            className={style.order__input}
            type="text"
            placeholder="Телефон"
            name="phone"
            value={orderDetails.phone}
            onChange={handleChange}
          />
          <input
            className={cn(style.order__input, style.order__input_address)}
            type="text"
            placeholder="Адрес"
            name="address"
            value={orderDetails.address}
            onChange={handleChange}
          />

          <fieldset className={style.order__payment}>
            <h3 className={style.order__paymentTitle}>Оплата:</h3>
            <label className={style.order__paymentLabel}>
              <input
                className={style.order__radio}
                type="radio"
                name="payment"
                value="card"
                checked={orderDetails.payment === 'card'}
                onChange={handleChange}
              />
              Картой
            </label>
            <label className={style.order__paymentLabel}>
              <input
                className={style.order__radio}
                type="radio"
                name="payment"
                value="cash"
                checked={orderDetails.payment === 'cash'}
                onChange={handleChange}
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
