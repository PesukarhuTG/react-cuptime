import { API_URL } from '../../const';
import style from './ProductItem.module.css';

const ProductItem = ({ img, title, price }) => {
  return (
    <article className={style.good}>
      <img className={style.good__image} src={`${API_URL}${img}`} alt={title} />
      <div className={style.good__content}>
        <h3 className={style.good__title}>{title}</h3>
        <p className={style.good__price}>{price}&nbsp;₽</p>
      </div>
    </article>
  );
};

export default ProductItem;
