import styles from './TitleList.module.css';

export const TitleList = ({ titleArray }) => {
  console.log(titleArray);
  return (
    <ul className={styles.wrapper}>
      {titleArray.map((item, i) => {
        return (
          <li key={i} className={styles.item}>{item}</li>
        )
      })}
    </ul>
  );
};