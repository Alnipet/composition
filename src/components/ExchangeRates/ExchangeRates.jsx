import styles from './ExchangeRates.module.css';

export const ExchangeRates = () => {
  const exchangeRatesData = [
    { name: 'USD', value: 55.33 },
    { name: 'USD', value: 55.33 },
    { name: 'USD', value: 55.33 },
  ];

  return (
    <ul className={styles.wrapper}>
      {exchangeRatesData.map((item, i) => {
        return (
          <li key={i} className={styles.item}>
            <span className={styles.name}>{item.name}</span>
            <span>{item.value}</span>
          </li>
        );
      })}
    </ul>
  );
};
