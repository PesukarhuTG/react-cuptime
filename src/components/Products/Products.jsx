import style from './Products.module.css';
import ProductItem from '../ProductItem/ProductItem';
import { productList } from '../../productList.js';

const Products = () => {
  return (
    <section className={style.goods}>
      <div className={style.container}>
        <h2 className={style.goods__title}>Чай</h2>
        <ul className={style.goods__list}>
          {productList.map((item) => (
            <li className={style.goods__item} key={item.id}>
              <ProductItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
