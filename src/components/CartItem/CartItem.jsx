import style from './CartItem.module.css';
import cn from 'classnames';

const CartItem = ({ image, title, price }) => {
  return (
    <li className={style.cartItem}>
      <img className={style.cartItem__image} src={image} alt={title} />
      <div className={style.cartItem__info}>
        <h3 className={style.cartItem__title}>{title}</h3>
        <div className={style.cartItem__quantity}>
          <button
            className={cn(
              style.cartItem__quantityBtn,
              style.cartItem__quantityBtn_minus
            )}
            type="button"
          ></button>
          <input
            className={style.cartItem__quantityInput}
            type="number"
            value={1}
          />
          <button
            className={cn(
              style.cartItem__quantityBtn,
              style.cartItem__quantityBtn_plus
            )}
            type="button"
          ></button>
        </div>
        <p className={style.cartItem__price}>{price}&nbsp;₽</p>
      </div>
    </li>
  );
};

export default CartItem;
