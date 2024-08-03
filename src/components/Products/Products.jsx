import style from './Products.module.css';
import ProductItem from '../ProductItem/ProductItem';
import { useEffect } from 'react';
import { useProducts } from '../../context/ProductContext.jsx';
import { useSearchParams } from 'react-router-dom';
import { SkeletonLoader } from '../';

const Products = () => {
  const [searchParams] = useSearchParams();
  const { products, setCategory } = useProducts();
  const category = searchParams.get('category');

  const categoryTypes = [
    { value: 'tea', title: 'Чай' },
    { value: 'coffee', title: 'Кофе' },
    { value: 'teapots', title: 'Чайники' },
    { value: 'cezves', title: 'Турки' },
    { value: 'other', title: 'Прочее' },
  ];

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  return (
    <section className={style.goods}>
      <div className={style.container}>
        <h2 className={style.goods__title}>
          {categoryTypes.find((item) => item.value === category).title}
        </h2>

        <ul className={style.goods__list}>
          {products.length ? (
            products.map((item) => (
              <li className={style.goods__item} key={item.id}>
                <ProductItem data={item} />
              </li>
            ))
          ) : (
            <SkeletonLoader />
          )}
        </ul>
      </div>
    </section>
  );
};

export default Products;
