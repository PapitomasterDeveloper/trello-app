import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Register.css';

class Register extends Component {
  render() {
    return (
      <section className="register">
      <form className="register__form" action="/">
        <h1 className="form__title">Crear una cuenta de Trello</h1>
        <p className="form__paragraph">o
        <Link className="anchor__paragraph" to="/">iniciar sesion con su cuenta</Link></p>
        <label className="form__label-name" htmlFor="name">Nombre</label>
        <input className="form__input-name" type="text" placeholder="Enter your password" min="8" max="30" required></input>
        <label className="form__label-email" htmlFor="email">Correo electrónico</label>
        <input className="form__input-email" type="email" placeholder="Enter your email" required></input>
        <label className="form__label-password" htmlFor="email">Contraseña</label>
        <input className="form__input-password" type="password" placeholder="Enter your password" min="8" max="30" required></input>
        <input className="form__input-submit" type="submit" value="Crear una cuenta nueva"></input>
      </form>
    </section>
    );
  }
}

export default Register;
