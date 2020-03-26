import React, { useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Logosvg from '../../assents/logo.svg';
import './styles.css';
import api from '../../services/api';
export default function Profile() {
    const history = useHistory();
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const [incidents, setIncidents] = useState([]);
    useEffect(() => {
        api.get('profile/incidents', {
            headers: { autor: ongId }
        }).then(res => { setIncidents(res.data.incident) })
    }, [ongId]);
    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incident/delete/${id}`, {
                headers: {
                    autor: ongId
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (err) {
            alert("Erro ao deletar o caso, tente novamente");
            console.log(`o erro em deletar é: ${err}`);
        }
    };
    function handleLogout() {
        localStorage.clear();
        history.push('/');
    };
    return (
        <div className="profile-container">
            <header>
                <img src={Logosvg} alt="logo "></img>
                <span>Bem vindo, {ongName} </span>
                <Link className="button" to="/incidents/new" >Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>
            <ul>

                {incidents.map(incident => {
                    return (
                        <li key={incident.id}>
                            <strong>Caso:</strong>
                            <p>{incident.title}</p>
                            <strong>DESCription:</strong>
                            <p>{incident.body}</p>
                            <strong>Valor:</strong>
                            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
                            <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                                <FiTrash2 size={18} color="#a8a8b3" />
                            </button>
                        </li>
                    )
                })}

            </ul>

        </div>
    )
}