import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

class Login extends Component {
  render() {
    return (
        <section className="login">
          <form className="login__form" action="">
            <h1 className="form__title">Iniciar sesión en Trello</h1>
            <p className="form__paragraph">o
            <Link className="anchor__paragraph" to="/register">crear una cuenta</Link></p>
            <label className="form__label-email" htmlFor="email">Correo electrónico <span className="label__span-email">(o nombre de usuario)</span></label>
            <input className="form__input-email" type="email" placeholder="Enter your email" required></input>
            <label className="form__label-password" htmlFor="email">Contraseña</label>
            <input className="form__input-password" type="password" placeholder="Enter your password" min="8" max="30" required></input>
            <input className="form__input-submit" type="submit" formtarget="/board" required></input>
          </form>
        </section>
    );
  }
}

export default Login;
