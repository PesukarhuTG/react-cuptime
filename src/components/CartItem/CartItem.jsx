import { useState } from 'react';
import { API_URL } from '../../const';
import { useCart } from '../../context/CartContext';
import style from './CartItem.module.css';
import cn from 'classnames';

const CartItem = ({ id, img, title, price, quantity }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const { updateQuantity, removeFromCart } = useCart();

  const handleDecrease = () => {
    const newQuantity = itemQuantity - 1;

    if (newQuantity > 0) {
      setItemQuantity(newQuantity);
      updateQuantity(id, newQuantity);
    } else {
      removeFromCart(id);
    }
  };

  const handleIncrease = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    updateQuantity(id, newQuantity);
  };

  return (
    <li className={style.cartItem}>
      <img
        className={style.cartItem__image}
        src={`${API_URL}${img}`}
        alt={title}
      />
      <div className={style.cartItem__info}>
        <h3 className={style.cartItem__title}>{title}</h3>
        <div className={style.cartItem__quantity}>
          <button
            className={cn(
              style.cartItem__quantityBtn,
              style.cartItem__quantityBtn_minus
            )}
            type="button"
            onClick={handleDecrease}
          ></button>
          <input
            className={style.cartItem__quantityInput}
            type="number"
            value={quantity}
            readOnly
          />
          <button
            className={cn(
              style.cartItem__quantityBtn,
              style.cartItem__quantityBtn_plus
            )}
            type="button"
            onClick={handleIncrease}
          ></button>
        </div>
        <p className={style.cartItem__price}>{price * quantity}&nbsp;₽</p>
      </div>
    </li>
  );
};

export default CartItem;
