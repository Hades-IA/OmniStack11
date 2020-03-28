import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import Heroimg from '../../assents/heroes.png';
import Logosvg from '../../assents/logo.svg';
import api from '../../services/api';
// 11c97275 login teste
export default function Login() {
    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogin(e) {
        e.preventDefault();

        try {
            const res = await api.post('session', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', res.data.ong.name);

            history.push("/profile");
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }

    }
    return (
        <div className="login-container">
            <section className="form">
                <img src={Logosvg} alt="Logo the hero" />
                <form onSubmit={handleLogin} >
                    <h1>Faça Seu Login</h1>
                    <input placeholder="Seu ID" value={id} onChange={e => setId(e.target.value)} />
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