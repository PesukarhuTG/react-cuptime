import Modal from 'react-modal';
import style from './ProductModal.module.css';
import cn from 'classnames';
import { API_URL } from '../../const';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    maxWidth: '744px',
    borderRadius: '6px',
    border: 'none',
    padding: 0,
  },
};

Modal.setAppElement('#root');

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(data, quantity);
    onRequestClose();
  };

  if (!data) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Product Modal"
    >
      <div className={style.modal__imageWrapper}>
        <img
          className={style.modal__image}
          src={`${API_URL}${data.img}`}
          alt={data.title}
        />
      </div>

      <div className={style.modal__content}>
        <h2 className={style.modal__title}>{data.title}</h2>
        <p className={style.modal__price}>{data.price}&nbsp;₽</p>
        <ul className={style.modal__additional}>
          {Object.entries(data.additional).map(([key, value]) => (
            <li className={style.additionalItem} key={key}>
              <span className={style.additionalItem__key}>{key}</span>{' '}
              <span className={style.additionalItem__value}>{value}</span>
            </li>
          ))}
        </ul>

        <div className={style.modal__controls}>
          <div className={style.modal__quantity}>
            <button
              className={cn(
                style.modalItem__quantityBtn,
                style.modalItem__quantityBtn_minus
              )}
              type="button"
              onClick={handleDecrease}
            ></button>
            <input
              className={style.modalItem__quantityInput}
              type="number"
              value={quantity}
              readOnly
            />
            <button
              className={cn(
                style.modalItem__quantityBtn,
                style.modalItem__quantityBtn_plus
              )}
              type="button"
              onClick={handleIncrease}
            ></button>
          </div>
          <button className={style.modal__cartBtn} onClick={handleAddToCart}>
            Добавить
          </button>
        </div>

        <button
          className={style.modal__closeBtn}
          type="button"
          onClick={onRequestClose}
        >
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
      </div>
    </Modal>
  );
};
