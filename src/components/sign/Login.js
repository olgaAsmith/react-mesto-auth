import { React, useState } from "react";

function Login(props) {
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
    props.onLogin(formValue.email, formValue.password);
    setFormValue({ email: "", password: "" });
  };

  return (
    <div className="sign-in">
      <h3 className="title sign-in__title">Вход</h3>
      <form
        action="#"
        className="sign-in__form"
        name="sign-in-form"
        onSubmit={handleSubmit}
      >
        <input
          id="sign-in-input-email"
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
        <span id="sign-in-input-email-error" className="popup__error"></span>
        <input
          id="sign-in-input-pass"
          className="input sign-in__input"
          type="password"
          name="password"
          required
          placeholder="Пароль"
          value={formValue.password}
          onChange={handleChange}
        />
        <span id="sign-in-input-pass-error" className="popup__error"></span>
        <button className="button sign-in__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
