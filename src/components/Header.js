import { React, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

function Header(props) {
  const location = useLocation();

  //*burger
  const [isBurgerMenuOpen, SetIsBurgerMenuOpen] = useState(false);
  const clickOnBurgerMenu = () => {
    SetIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <header className="header">
      <Routes>
        <Route
          path="/*"
          element={<Link className="button header__logo" to="#!"></Link>}
        />
      </Routes>
      {props.isLogIn && (
        <div
          className={`${
            isBurgerMenuOpen
              ? "header__menu-burger_active"
              : "header__menu-burger"
          }`}
          onClick={clickOnBurgerMenu}
        ></div>
      )}
      {props.isLogIn ? (
        <div
          className={`header__wrapper-menu ${
            isBurgerMenuOpen ? "header__wrapper-menu_active" : ""
          }`}
        >
          <div className="header__menu">
            <p className="header__menu-email">{props.userEmail}</p>
            <button
              className="button header__menu-exit"
              onClick={props.onLogout}
            >
              Выход
            </button>
          </div>
        </div>
      ) : (
        <Routes>
          <Route
            path="/sign-up"
            element={
              <Link className="button header__sign-in" to="/sign-in">
                Войти
              </Link>
            }
          />
          <Route
            path="/sign-in"
            element={
              <Link className="button header__sign-in" to="/sign-up">
                Регистрация
              </Link>
            }
          />
        </Routes>
      )}
    </header>
  );
}

export default Header;
