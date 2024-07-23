import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './Feedback.scss';
import './Form.scss';

interface IMyForm {
  name: string;
  phone: string;
}

const Feedback: FC = () => {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const {
    register,
    handleSubmit,

    reset,

    formState: { errors },
  } = useForm<IMyForm>({
    mode: 'onChange',
  });

  const submit: SubmitHandler<IMyForm> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="feedback offset-section" id="feedback">
      <div className="container">
        <div className="feedback__content">
          <h2 className="section__title feedback__title">Отправить форму</h2>
          <form className="form" id="form" onSubmit={handleSubmit(submit)}>
            <div
              className={`input-container ${errors.name ? 'invalid' : ''} ${
                name.length >= 2 && 'valid'
              }`}
            >
              <input
                id="name"
                className="form__input input"
                type="text"
                placeholder=" "
                {...register('name', {
                  required: true,
                  minLength: 2,
                  onChange: (event) => {
                    setName(event.target.value);
                  },
                })}
              />

              <span className="invalid-text">helperText</span>
              <img className="icon-status icon-valid" src="img/svg/valid.svg" />
              <img
                className="icon-status icon-invalid"
                src="img/svg/invalid.svg"
              />
              <label className="placeholder">Имя</label>
            </div>

            <div
              className={`input-container ${errors.phone ? 'invalid' : ''} ${
                phone.length === 11 && 'valid'
              }`}
            >
              <input
                id="phone"
                className="form__input input"
                type="tel"
                placeholder=" "
                {...register('phone', {
                  required: true,
                  minLength: 11,
                  onChange: (event) => {
                    setPhone(event.target.value);
                  },
                })}
              />
              <span className="invalid-text">helperText</span>
              <img className="icon-status icon-valid" src="img/svg/valid.svg" />
              <img
                className="icon-status icon-invalid"
                src="img/svg/invalid.svg"
              />
              <label className="placeholder">Телефон</label>
            </div>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="check"
                onChange={() => setChecked((prev) => !prev)}
                className="custom-checkbox__input"
              />
              <span className="custom-checkbox__text">Согласен</span>
            </label>
            <button
              type="submit"
              className="btn-reset btn btn_primary form__button"
              disabled={checked ? false : true}
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
