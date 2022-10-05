import styles from './MainPage.module.css';
import { NewsBlock } from '../NewsBlock/NewsBlock';
import { ExchangeRates } from '../ExchangeRates/ExchangeRates';
import { MainMenu } from '../MainMenu/MainMenu';
import { SearchBlock } from '../SearchBlock/SearchBlock';
import { Banner } from '../Banner/Banner';
import { WidgetSection} from '../WidgetSection/WidgetSection';

export const MainPage = (props) => {
  const categoriesArr = [
    'Видео',
    'Картинки',
    'Новости',
    'Карты',
    'Маркет',
    'Переводчик',
    'Эфир',
    'ещё',
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <img
            className={styles.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Yandex_official_logo.svg/2560px-Yandex_official_logo.svg.png"
            alt="Logo"
          ></img>
        </div>
        <main className={styles.main}>
          <NewsBlock />
          <ExchangeRates />
          <MainMenu categoriesArr={categoriesArr} />
          <SearchBlock />
          <Banner/>
          <WidgetSection/>
        </main>
      </div>
    </div>
  );
};
