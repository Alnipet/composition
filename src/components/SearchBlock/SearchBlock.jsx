import styles from './SearchBlock.module.css';

export const SearchBlock = () => {
  return (
    <div>
      <ul className={styles.wrapper}>
        <input className={styles.input}></input>
        <button className={styles.btn}>Поиск</button>
      </ul>
      <span>Найдется всё, например Фаза луны</span>
    </div>
  );
};
