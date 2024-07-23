import { FC } from 'react';
import './Credits.scss';

const Credits: FC = () => {
  return (
    <section className="credits offset-section" id="credits">
      <div className="container">
        <div className="credits__content flex">
          <div className="credits__left">
            <h3 className="credits__title font-primarySemibold">
              Круто, ты дошел до третьего блока
            </h3>
            <p className="credits__description font-primaryRegular">
              63% опрошенных пользовались кредитами из-за того, что не могли
              покрыть непредвиденные расходы свыше 15 000 ₽.
              <br />
              <br />
              Доступ к заработанным деньгам помогает отказаться от кредитов и
              экономить деньги на процентах и штрафах.
            </p>
          </div>
          <div className="credits__img">
            <img
              src="img/credits/credits.jpg"
              alt="Приложение"
              width="592"
              height="448"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credits;
