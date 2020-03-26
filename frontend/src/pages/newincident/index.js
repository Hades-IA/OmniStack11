import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Logosvg from '../../assents/logo.svg';
import './styles.css';
import api from '../../services/api';
export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    async function handleNewIncident(e) {
        e.preventDefault();
        const data = {
            title,
            body,
            value
        };
        try {
            await api.post('incident/create', data, {
                headers: {
                    autor: ongId
                }
            });
            history.push('/profile');
        } catch (error) {
            alert('Erro ao castrar novo caso, tente novamente.')
            console.log(`O erro é esse aqui : ${error}`)
        }
    }
    return (
        <div className="newincident-container" >
            <div className="content">
                <section>
                    <img src={Logosvg} alt="Logo da Be the Hero"></img>
                    <h1>Cadastrar Novo Caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        voltar para a home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident} >
                    <input placeholder="Titulo do Caso" value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea placeholder="Descrição" value={body} onChange={e => setBody(e.target.value)} />
                    <input placeholder="Valor em Reais" value={value} onChange={e => setValue(e.target.value)} />

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}