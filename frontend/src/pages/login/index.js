import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';
import Heroimg from '../../assents/heroes.png';
import Logosvg from '../../assents/logo.svg';

export default function login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={Logosvg} alt="Logo the hero" />
                <form method="POST" action="" >
                    <h1>Faça Seu Login</h1>
                    <input placeholder="Seu ID" />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>

            </section>
            <img src={Heroimg} alt="Heros" />
        </div>

    )
}