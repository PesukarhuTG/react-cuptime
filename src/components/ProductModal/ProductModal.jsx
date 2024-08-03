import Modal from 'react-modal';
import style from './ProductModal.module.css';
//import cn from 'classnames';
import { API_URL } from '../../const';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
  console.log();
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
      <img
        className={style.good__image}
        src={`${API_URL}${data.img}`}
        alt={data.title}
      />
      <div className={style.good__content}>
        <h2 className={style.good__title}>{data.title}</h2>
        <p className={style.good__price}>{data.price}&nbsp;₽</p>
        <ul>
          {Object.entries(data.additional).map(([key, value]) => (
            <li key={key}>
              <span>{key}</span>: <span>{value}</span>
            </li>
          ))}
        </ul>
        <button type="button" onClick={onRequestClose}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="5.71228"
              y="14.1975"
              width="12"
              height="1.5"
              transform="rotate(-45 5.71228 14.1975)"
              fill="#B8B8B8"
            />
            <rect
              x="14.1976"
              y="15.2582"
              width="12"
              height="1.5"
              transform="rotate(-135 14.1976 15.2582)"
              fill="#B8B8B8"
            />
          </svg>
        </button>
      </div>
    </Modal>
  );
};
