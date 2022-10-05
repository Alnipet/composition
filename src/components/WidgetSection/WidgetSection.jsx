import styles from './WidgetSection.module.css';
import { Widget } from '../Widget/Widget';

export const WidgetSection = () => {
  const widgetData = [{
    id: 1,
    title: 'Заголовок',
    content: ['бла бла бла', 'бла бла бла', 'бла бла бла', 'бла бла бла', 'бла бла бла'],
  },
    {
      id: 1,
      title: 'Заголовок',
      content: ['бла бла бла', 'бла бла бла', 'бла бла бла', 'бла бла бла', 'бла бла бла'],
    },
    {
      id: 1,
      title: 'Заголовок',
      content: ['бла бла бла', 'бла бла бла', 'бла бла бла', 'бла бла бла', 'бла бла бла'],
    },
    {
      id: 1,
      title: 'Заголовок',
      content: ['бла бла бла', 'бла бла бла', 'бла бла бла', 'бла бла бла', 'бла бла бла'],
    }];

  return (
    <div className={styles.wrapper}>
      {widgetData.map(item => {
        return (
          <Widget key={item.id} data={item}/>
        )
      })}
    </div>
  );
};