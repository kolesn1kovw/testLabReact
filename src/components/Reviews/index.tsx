import { FC, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Reviews.scss';

interface ISlide {
  photo?: string;
  name: string;
  location: string;
  text: string;
}

const slides: ISlide[] = [
  {
    photo: 'img/reviews/author-1.jpg',
    name: 'Константинов Михаил Павлович',
    location: 'Санкт-Петербург',
    text: '  Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы',
  },

  {
    photo: 'img/reviews/author-3.jpg',
    name: 'Иван Иванов',
    location: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
  },

  {
    photo: 'img/reviews/author-2.jpg',
    name: 'Артем Корнилов',
    location: 'Самара',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
  },

  {
    photo: 'img/reviews/author-2.jpg',
    name: 'Иван Иванов',
    location: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу. пользовательский опыт мы упускаем',
  },

  {
    photo: 'img/reviews/author-1.jpg',
    name: 'Константинов Михаил Павлович',
    location: 'Санкт-Петербург',
    text: '  Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы',
  },

  {
    photo: 'img/reviews/author-3.jpg',
    name: 'Иван Иванов',
    location: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
  },

  {
    photo: 'img/reviews/author-2.jpg',
    name: 'Артем Корнилов',
    location: 'Самара',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
  },
];

const Reviews: FC = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="reviews offset-section">
      <div className="container">
        <div className="reviews__content">
          <h2 className="section__title reviews__title">Отзывы</h2>
          <div className="reviews__slider-wrapper">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              className="reviews__slider"
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                577: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1025: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
            >
              {slides.map(
                ({ photo, name, location, text }: ISlide, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="review">
                      <div className="review__author flex">
                        <div className="review__author-photo">
                          <img
                            src={photo}
                            alt={name}
                            width="44"
                            height="44"
                            loading="lazy"
                          />
                        </div>
                        <div className="review__author-info">
                          <h6 className="review__author-name font-primarySemibold">
                            {name}
                          </h6>
                          <p className="review__author-location font-primaryRegular">
                            {location}
                          </p>
                        </div>
                      </div>
                      <p className="review__text font-primaryRegular">{text}</p>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
            <div className="reviews__slider-buttons">
              <div className="swiper-button-prev" ref={prevRef}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="32"
                  viewBox="0 0 16 32"
                  fill="none"
                >
                  <path
                    d="M14.8387 2.27597C15.0816 2.0245 15.216 1.6877 15.2129 1.33811C15.2099 0.988509 15.0697 0.654093 14.8225 0.406882C14.5753 0.159671 14.2408 0.0194457 13.8912 0.0164078C13.5417 0.0133699 13.2048 0.147762 12.9534 0.39064L2.05738 11.2866C0.807572 12.5368 0.105469 14.2322 0.105469 16C0.105469 17.7677 0.807572 19.4631 2.05738 20.7133L12.9534 31.6093C13.2048 31.8522 13.5417 31.9866 13.8912 31.9835C14.2408 31.9805 14.5753 31.8403 14.8225 31.5931C15.0697 31.3459 15.2099 31.0114 15.2129 30.6618C15.216 30.3122 15.0816 29.9754 14.8387 29.724L3.94271 18.828C3.19283 18.0779 2.77157 17.0606 2.77157 16C2.77157 14.9393 3.19283 13.9221 3.94271 13.172L14.8387 2.27597Z"
                    fill="#C2C8CD"
                  />
                </svg>
              </div>
              <div className="swiper-button-next" ref={nextRef}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="32"
                  viewBox="0 0 16 32"
                  fill="none"
                >
                  <path
                    d="M14.8387 2.27597C15.0816 2.0245 15.216 1.6877 15.2129 1.33811C15.2099 0.988509 15.0697 0.654093 14.8225 0.406882C14.5753 0.159671 14.2408 0.0194457 13.8912 0.0164078C13.5417 0.0133699 13.2048 0.147762 12.9534 0.39064L2.05738 11.2866C0.807572 12.5368 0.105469 14.2322 0.105469 16C0.105469 17.7677 0.807572 19.4631 2.05738 20.7133L12.9534 31.6093C13.2048 31.8522 13.5417 31.9866 13.8912 31.9835C14.2408 31.9805 14.5753 31.8403 14.8225 31.5931C15.0697 31.3459 15.2099 31.0114 15.2129 30.6618C15.216 30.3122 15.0816 29.9754 14.8387 29.724L3.94271 18.828C3.19283 18.0779 2.77157 17.0606 2.77157 16C2.77157 14.9393 3.19283 13.9221 3.94271 13.172L14.8387 2.27597Z"
                    fill="#C2C8CD"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
