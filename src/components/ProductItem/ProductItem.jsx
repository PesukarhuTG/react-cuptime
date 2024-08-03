import { useState } from 'react';
import { API_URL } from '../../const';
import style from './ProductItem.module.css';
import { ProductModal } from '../ProductModal/ProductModal';

const ProductItem = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <a
        className={style.good__link}
        href="#"
        onClick={openModal}
        aria-label={`Открыть модальное окно для ${data.title}`}
      >
        <article className={style.good}>
          <img
            className={style.good__image}
            src={`${API_URL}${data.img}`}
            alt={data.title}
          />
          <div className={style.good__content}>
            <h3 className={style.good__title}>{data.title}</h3>
            <p className={style.good__price}>{data.price}&nbsp;₽</p>
          </div>
        </article>
      </a>
      <ProductModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        data={data}
      />
    </>
  );
};

export default ProductItem;
