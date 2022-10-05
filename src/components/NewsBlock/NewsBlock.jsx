import styles from './NewsBlock.module.css';
import { TitleList } from './components/TitleList/TitleList';
import { NewsItem } from './components/NewsItem/NewsItem';
import { NewsIcon } from './components/NewsIcon/NewsIcon';

export const NewsBlock = () => {
  const date = new Date().toLocaleDateString();
  const newsData = {
    titleArray: ['Сейчас в СМИ', 'в России', 'Рекомендуем'],
    newsArray: [
      { id: 1, icon: true, news: 'Очень важная новость' },
      { id: 2, icon: true, news: 'Очень важная новость' },
      { id: 3, icon: true, news: 'Очень важная новость' },
      { id: 4, icon: true, news: 'Очень важная новость' },
      { id: 5, icon: true, news: 'Очень важная новость' },
      { id: 6, icon: true, news: 'Очень важная новость' },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <TitleList titleArray={newsData.titleArray} />
        {date}
      </header>
      <ul className={styles.content}>
        {newsData.newsArray.map((item) => {
          return (
            <NewsItem item={item} key={item.id}>
              {(icon) => (icon ? <NewsIcon /> : null)}
            </NewsItem>
          );
        })}
      </ul>
    </div>
  );
};
