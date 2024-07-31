import style from './ProductItem.module.css';

const ProductItem = ({ image, title, price }) => {
  return (
    <article className={style.good}>
      <img className={style.good__image} src={image} alt={title} />
      <div className={style.good__content}>
        <h3 className={style.good__title}>{title}</h3>
        <p className={style.good__price}>{price}&nbsp;₽</p>
      </div>
    </article>
  );
};

export default ProductItem;
