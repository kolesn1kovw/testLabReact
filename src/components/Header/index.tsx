import { FC, useState } from 'react';
import './Header.scss';
import './Nav.scss';
import './Burger.scss';

const Header: FC = () => {
  const [burger, setBurger] = useState(false);

  const handleShowBurger = () => {
    setBurger(true);
  };

  const handleHideBurger = () => {
    setBurger(false);
  };

  return (
    <header className={`header ${burger && 'show-menu'}`}>
      <div className="container">
        <div className="header__content flex">
          <img
            src="img/logo.svg"
            alt="testLab"
            className="header__logo"
            width="120"
            height="24"
          />
          <nav className="header__nav nav">
            <ul className="list-reset nav__list flex">
              <li className="nav__item">
                <a
                  href="#how-it-works"
                  className="nav__link font-primaryRegular"
                >
                  Как это работает
                </a>
              </li>
              <li className="nav__item">
                <a href="#credits" className="nav__link font-primaryRegular">
                  3-й блок
                </a>
              </li>
              <li className="nav__item">
                <a href="#faq" className="nav__link font-primaryRegular">
                  Вопросы и ответы
                </a>
              </li>
              <li className="nav__item">
                <a href="#feedback" className="nav__link font-primaryRegular">
                  Форма
                </a>
              </li>
            </ul>
          </nav>
          <div className="wrapper-button" onClick={handleShowBurger}>
            <button className="burger">
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <div className="adaptive__menu">
        <div className="container">
          <div className="adaptive__menu-top flex">
            <div className="adaptive__menu__logo">
              <img
                src="img/logo-dark.svg"
                alt="testLab"
                width="120"
                height="24"
              />
            </div>
            <button className="close-menu" onClick={handleHideBurger}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.58673 9.00004L0.515778 16.071L1.92999 17.4852L9.00095 10.4143L16.072 17.4853L17.4862 16.0711L10.4152 9.00004L17.4863 1.92886L16.0721 0.514648L9.00095 7.58583L1.92984 0.514723L0.515625 1.92894L7.58673 9.00004Z"
                  fill="#191C1F"
                />
              </svg>
            </button>
          </div>
          <nav className="header__nav nav">
            <ul className="list-reset nav__list flex">
              <li className="nav__item" onClick={handleHideBurger}>
                <a
                  href="#how-it-works"
                  className="nav__link font-primaryRegular"
                >
                  Как это работает
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                  >
                    <path
                      d="M0.400124 12.293C0.212616 12.4807 0.107328 12.7351 0.107422 13.0004C0.107516 13.2657 0.212984 13.52 0.400624 13.7075C0.588265 13.895 0.842708 14.0003 1.10798 14.0002C1.37325 14.0001 1.62762 13.8947 1.81512 13.707L6.40012 9.12104C6.96254 8.55845 7.27848 7.79553 7.27848 7.00004C7.27848 6.20454 6.96254 5.44162 6.40012 4.87904L1.81112 0.293037C1.62072 0.120876 1.3714 0.0285305 1.11478 0.0351199C0.858167 0.0417093 0.613915 0.146729 0.432594 0.328435C0.251274 0.510141 0.146773 0.754617 0.140729 1.01124C0.134685 1.26787 0.227559 1.517 0.400124 1.70704L4.98612 6.29304C5.17359 6.48056 5.27891 6.73487 5.27891 7.00004C5.27891 7.2652 5.17359 7.51951 4.98612 7.70704L0.400124 12.293Z"
                      fill="#83898F"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav__item" onClick={handleHideBurger}>
                <a href="#credits" className="nav__link font-primaryRegular">
                  3-й блок
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                  >
                    <path
                      d="M0.400124 12.293C0.212616 12.4807 0.107328 12.7351 0.107422 13.0004C0.107516 13.2657 0.212984 13.52 0.400624 13.7075C0.588265 13.895 0.842708 14.0003 1.10798 14.0002C1.37325 14.0001 1.62762 13.8947 1.81512 13.707L6.40012 9.12104C6.96254 8.55845 7.27848 7.79553 7.27848 7.00004C7.27848 6.20454 6.96254 5.44162 6.40012 4.87904L1.81112 0.293037C1.62072 0.120876 1.3714 0.0285305 1.11478 0.0351199C0.858167 0.0417093 0.613915 0.146729 0.432594 0.328435C0.251274 0.510141 0.146773 0.754617 0.140729 1.01124C0.134685 1.26787 0.227559 1.517 0.400124 1.70704L4.98612 6.29304C5.17359 6.48056 5.27891 6.73487 5.27891 7.00004C5.27891 7.2652 5.17359 7.51951 4.98612 7.70704L0.400124 12.293Z"
                      fill="#83898F"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav__item" onClick={handleHideBurger}>
                <a href="#faq" className="nav__link font-primaryRegular">
                  Вопросы и ответы
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                  >
                    <path
                      d="M0.400124 12.293C0.212616 12.4807 0.107328 12.7351 0.107422 13.0004C0.107516 13.2657 0.212984 13.52 0.400624 13.7075C0.588265 13.895 0.842708 14.0003 1.10798 14.0002C1.37325 14.0001 1.62762 13.8947 1.81512 13.707L6.40012 9.12104C6.96254 8.55845 7.27848 7.79553 7.27848 7.00004C7.27848 6.20454 6.96254 5.44162 6.40012 4.87904L1.81112 0.293037C1.62072 0.120876 1.3714 0.0285305 1.11478 0.0351199C0.858167 0.0417093 0.613915 0.146729 0.432594 0.328435C0.251274 0.510141 0.146773 0.754617 0.140729 1.01124C0.134685 1.26787 0.227559 1.517 0.400124 1.70704L4.98612 6.29304C5.17359 6.48056 5.27891 6.73487 5.27891 7.00004C5.27891 7.2652 5.17359 7.51951 4.98612 7.70704L0.400124 12.293Z"
                      fill="#83898F"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav__item" onClick={handleHideBurger}>
                <a href="#feedback" className="nav__link font-primaryRegular">
                  Форма
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                  >
                    <path
                      d="M0.400124 12.293C0.212616 12.4807 0.107328 12.7351 0.107422 13.0004C0.107516 13.2657 0.212984 13.52 0.400624 13.7075C0.588265 13.895 0.842708 14.0003 1.10798 14.0002C1.37325 14.0001 1.62762 13.8947 1.81512 13.707L6.40012 9.12104C6.96254 8.55845 7.27848 7.79553 7.27848 7.00004C7.27848 6.20454 6.96254 5.44162 6.40012 4.87904L1.81112 0.293037C1.62072 0.120876 1.3714 0.0285305 1.11478 0.0351199C0.858167 0.0417093 0.613915 0.146729 0.432594 0.328435C0.251274 0.510141 0.146773 0.754617 0.140729 1.01124C0.134685 1.26787 0.227559 1.517 0.400124 1.70704L4.98612 6.29304C5.17359 6.48056 5.27891 6.73487 5.27891 7.00004C5.27891 7.2652 5.17359 7.51951 4.98612 7.70704L0.400124 12.293Z"
                      fill="#83898F"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
