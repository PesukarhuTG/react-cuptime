import style from './Products.module.css';
import ProductItem from '../ProductItem/ProductItem';
import { useEffect } from 'react';
import { useProducts } from '../../context/ProductContext.jsx';

const Products = () => {
  const { products, setCategory } = useProducts();
  const category = 'tea';
  let content = null;

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  if (!products.length) {
    content = <p>Идет загрузка товаров, подождите немного</p>;
  }

  if (products.length) {
    content = (
      <>
        <h2 className={style.goods__title}>Чай</h2>

        <ul className={style.goods__list}>
          {products.map((item) => (
            <li className={style.goods__item} key={item.id}>
              <ProductItem {...item} />
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <section className={style.goods}>
      <div className={style.container}>{content}</div>
    </section>
  );
};

export default Products;
