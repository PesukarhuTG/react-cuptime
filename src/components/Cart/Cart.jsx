import style from './Cart.module.css';
import cn from 'classnames';
import CartItem from '../CartItem/CartItem.jsx';
import { useCart } from '../../context/CartContext.jsx';
import { SkeletonLoader } from '../';

const Cart = () => {
  const { cart } = useCart();

  const totalPrice = cart
    ? cart.reduce((acc, item) => item.quantity * item.price + acc, 0)
    : 0;

  return (
    <section className={style.cart}>
      <div className={cn(style.container, style.cart__container)}>
        <h2 className={style.cart__title}>
          Корзина ({cart ? cart.length : 0})
        </h2>

        <ul className={style.cart__items}>
          {cart ? (
            cart.map((item) => <CartItem key={item.id} {...item} />)
          ) : (
            <SkeletonLoader />
          )}
        </ul>

        <div className={style.cart__summary}>
          <h3 className={style.cart__summaryTitle}>Итого:</h3>
          <p className={style.cart__total}>{totalPrice}&nbsp;₽</p>
          <button className={style.cart__orderBtn} type="button">
            Заказать
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
