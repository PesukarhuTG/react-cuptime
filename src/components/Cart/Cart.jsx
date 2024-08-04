import { useState } from 'react';
import style from './Cart.module.css';
import cn from 'classnames';
import CartItem from '../CartItem/CartItem.jsx';
import { useCart } from '../../context/CartContext.jsx';
import { useOrder } from '../../context/OrderContext';
import { SkeletonLoader } from '../';
import { API_URL } from '../../const';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Cart = () => {
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { cart, clearCart } = useCart();
  const { orderDetails, clearOrderDetails } = useOrder();

  const handleSubmit = async () => {
    const orderData = {
      ...orderDetails,
      items: cart.map((item) => ({ id: item.id, quantity: item.quantity })),
    };

    try {
      const res = await fetch(`${API_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) {
        throw new Error('Ошибка при отправке заказа');
      }

      const data = await res.json();
      setOrderStatus('success');
      setOrderId(data.order.id);
      clearCart();
      clearOrderDetails();
    } catch (error) {
      setOrderStatus('error');
      console.error(`Ошибка:${error}`);
    } finally {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const totalPrice = cart
    ? cart.reduce((acc, item) => item.quantity * item.price + acc, 0)
    : 0;

  return (
    <section className={style.cart}>
      <div className={cn(style.container, style.cart__container)}>
        <h2 className={style.cart__title}>
          Корзина (
          {cart ? cart.reduce((acc, item) => item.quantity + acc, 0) : 0})
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
          <button
            className={style.cart__orderBtn}
            type="button"
            onClick={handleSubmit}
          >
            Заказать
          </button>
        </div>
      </div>

      <Modal
        className={style.modalCart}
        overlayClassName={style.modalCart__overlay}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Cart Modal"
      >
        <h2 className={style.modalCart__title}>
          {orderStatus === 'success'
            ? `Заказ успешно отправлен! Номер вашего заказа ${orderId}`
            : 'Произошла ошибка при отправке заказа. Проверьте данные.'}
        </h2>
        <button className={style.modalCart__btn} onClick={closeModal}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3.71228"
              y="12.1975"
              width="12"
              height="1.5"
              transform="rotate(-45 3.71228 12.1975)"
              fill="#B8B8B8"
            />
            <rect
              x="12.1976"
              y="13.2582"
              width="12"
              height="1.5"
              transform="rotate(-135 12.1976 13.2582)"
              fill="#B8B8B8"
            />
          </svg>
        </button>
      </Modal>
    </section>
  );
};

export default Cart;
