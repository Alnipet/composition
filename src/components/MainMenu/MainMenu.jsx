import styles from './MainMenu.module.css';

export const MainMenu = ({ categoriesArr }) => {

  return (
    <ul className={styles.wrapper}>
      {categoriesArr.map((item, i) => {
        return (
          <li key={i} className={styles.item}>{item}</li>
        )
      })}
    </ul>
  );
};