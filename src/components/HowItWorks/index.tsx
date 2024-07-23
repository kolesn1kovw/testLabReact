import { FC } from 'react';
import './HowItWorks.scss';

const listItems = [
  {
    icon: 'img/how-it-works/waiting.svg',
    title: 'Прочитай задание внимательно',
    description: 'Думаю у тебя не займет это больше двух-трех минут',
  },

  {
    icon: 'img/how-it-works/delivery-truck.svg',
    title: 'Изучи весь макет заранее',
    description:
      'Подумай как это будет работать на разных разрешениях и при скролле',
  },

  {
    icon: 'img/how-it-works/secure.svg',
    title: 'Сделай хорошо',
    description: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
  },

  {
    icon: 'img/how-it-works/money-bags.svg',
    title: 'Получи предложение',
    description:
      'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
  },
];

const HowItWorks: FC = () => {
  return (
    <section className="how-it-works offset-section" id="how-it-works">
      <div className="container">
        <div className="how-it-works__content">
          <h2 className="section__title how-it-works__title font-primarySemibold">
            Как это работает
          </h2>
          <ul className="list-reset how-it-works__list">
            {listItems.map((el, index) => (
              <li key={index} className="how-it-works__item item">
                <div className="item__icon">
                  <img src={el.icon} alt={el.title} width="72" height="72" />
                </div>
                <div className="item__info">
                  <h6 className="item__title font-primarySemibold">
                    {el.title}
                  </h6>
                  <p className="item__description font-primaryRegular">
                    {el.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
