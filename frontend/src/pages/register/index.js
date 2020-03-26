import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';
import Logosvg from '../../assents/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whats, setWhats] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');


    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            whats,
            city,
            uf
        };
        try {
            const res = await api.post('ong/create', data);
            alert(`Seu ID de acesso: ${res.data.id}`);
            history.push('/');
        } catch (err) {
            alert('Erro no Cadastro Tente Novamente.')
        }

    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={Logosvg} alt="Logo da Be the Hero"></img>
                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajude  pessoas a encontrarem os casos  da sua ONG.
                    </p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        voltar
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="WhatsApp" value={whats} onChange={e => setWhats(e.target.value)} />
                    <div className="input-group">
                        <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
                        <input placeholder="UF" style={{ width: 80 }} value={uf} onChange={e => setUf(e.target.value)} />
                    </div>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}