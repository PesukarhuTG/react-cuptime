import ContentLoader from 'react-content-loader';
import style from './SkeletonLoader.module.css';

const SkeletonLoader = ({ count = 6 }) => (
  <>
    {Array(count)
      .fill()
      .map((_, index) => (
        <div className={style.skeleton_wrapper} key={index}>
          <ContentLoader
            speed={2}
            viewBox="0 0 420 600"
            backgroundColor={'#b3e3da'}
            foregroundColor={'#c6a7d9'}
          >
            <rect x="0" y="0" width="100%" height="70%" />
            <rect x="24" y="calc(70% + 30px)" width="80%" height="30" />
            <rect x="24" y="calc(70% + 80px)" width="40%" height="25" />
          </ContentLoader>
        </div>
      ))}
  </>
);

export default SkeletonLoader;
