import { FC } from 'react';
import './Hero.scss';

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper-content">
          <div className="hero__content">
            <h1 className="hero__title font-primarySemibold">
              Говорят, никогда не поздно сменить профессию
            </h1>
            <p className="hero__subtitle font-primaryRegular">
              Сделай круто тестовое задание и у тебя получится
            </p>
            <a
              href="#"
              className="btn btn_white hero__button font-primarySemibold"
            >
              Проще простого!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
