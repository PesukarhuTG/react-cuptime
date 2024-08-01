import style from './Cart.module.css';
import cn from 'classnames';
import { productList } from '../../productList.js';
import CartItem from '../CartItem/CartItem.jsx';

const Cart = () => {
  return (
    <section className={style.cart}>
      <div className={cn(style.container, style.cart__container)}>
        <h2 className={style.cart__title}>Корзина (6)</h2>

        <ul className={style.cart__items}>
          {productList.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>

        <div className={style.cart__summary}>
          <h3 className={style.cart__summaryTitle}>Итого:</h3>
          <p className={style.cart__total}>2200&nbsp;₽</p>
          <button className={style.cart__orderBtn} type="button">
            Заказать
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
