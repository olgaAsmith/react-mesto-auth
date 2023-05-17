import { React, useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }
    props.onRegister(formValue.email, formValue.password);
  };

  return (
    <div className="sign-in">
      <h3 className="title sign-in__title">Регистрация</h3>
      <form
        action="#"
        className="sign-in__form"
        name="sign-up-form"
        onSubmit={handleSubmit}
      >
        <input
          id="sign-up-input-email"
          className="input sign-in__input"
          type="e-mail"
          name="email"
          required
          placeholder="Email"
          minLength="2"
          maxLength="40"
          value={formValue.email}
          onChange={handleChange}
        />
        <span id="sign-up-input-email-error" className="popup__error"></span>

        <input
          id="sign-up-input-pass"
          className="input sign-in__input"
          type="password"
          name="password"
          required
          placeholder="Пароль"
          value={formValue.password}
          onChange={handleChange}
        />
        <span id="sign-iup-input-pass-error" className="popup__error"></span>

        <button className="button sign-in__button" type="submit">
          Зарегистрироваться
        </button>
        <div className="sign-up__under-text">
          <p className="sign-up__text">Уже зарегистрированы? </p>
          <Link className="button sign-up__link" to="/sign-in">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
