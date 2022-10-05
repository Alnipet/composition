import styles from './Banner.module.css';

export const Banner = () => {
  const bannerLink = 'https://tvl.volschool2.ru/images/banners/3-min.jpg';
  const style = {
    backgroundImage: `url(${bannerLink})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return <div style={style} className={styles.wrapper}></div>;
};
