import styles from './NewsItem.module.css';

export const NewsItem = ({ item, children }) => {
  console.log(item.news);
  return (
    <li className={styles.wrapper}>
      <span>{children(item.icon)}</span>
      <div className={styles.text}>{item.news}</div>
    </li>
  );
};
