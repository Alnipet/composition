import styles from './Widget.module.css';


export const Widget = ({data}) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>{data.title}</header>
      <div className={styles.content}>
        {data.content.map(item => {
          return (
            <div>{item}</div>
          )
        })}
      </div>
    </div>
);
};
