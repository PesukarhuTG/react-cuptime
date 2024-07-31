import style from './Products.module.css';
import ProductItem from '../ProductItem/ProductItem';

const productList = [
  {
    id: 'art01',
    title: 'Кокосовая матча',
    image: 'img/photo-2.jpg',
    price: '390',
  },
  {
    id: 'art02',
    title: 'Зеленый индонезийский чай',
    image: 'img/photo-1.jpg',
    price: '340',
  },
  {
    id: 'art03',
    title: 'Черный чай из Эфиопии',
    image: 'img/photo-0.jpg',
    price: '380',
  },
  {
    id: 'art04',
    title: 'Черный чай из Калифорнии',
    image: 'img/photo-5.jpg',
    price: '360',
  },
  {
    id: 'art05',
    title: 'Органическая веганская матча',
    image: 'img/photo-4.jpg',
    price: '400',
  },
  {
    id: 'art06',
    title: 'Чай черный Лакандона',
    image: 'img/photo-3.jpg',
    price: '390',
  },
];

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
