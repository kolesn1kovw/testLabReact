import { FC } from 'react';
import './Footer.scss';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text font-primaryRegular">
          © 2021 Лаборатория интернет
        </p>
      </div>
    </footer>
  );
};

export default Footer;
