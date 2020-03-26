import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logosvg from '../../assents/logo.svg';
import './styles.css';

export default function profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={Logosvg} alt="logo "></img>
                <span>Bem vindo </span>
                <Link className="button" to="/incidents/new" >Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso titulo</p>
                    <strong>DESCription:</strong>
                    <p>descrição teste</p>
                    <strong>Valor:</strong>
                    <p>quantidade</p>
                    <button type="button">
                        <FiTrash2 size={18} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso titulo</p>
                    <strong>DESCription:</strong>
                    <p>descrição teste</p>
                    <strong>Valor:</strong>
                    <p>quantidade</p>
                    <button type="button">
                        <FiTrash2 size={18} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso titulo</p>
                    <strong>DESCription:</strong>
                    <p>descrição teste</p>
                    <strong>Valor:</strong>
                    <p>quantidade</p>
                    <button type="button">
                        <FiTrash2 size={18} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso titulo</p>
                    <strong>DESCription:</strong>
                    <p>descrição teste</p>
                    <strong>Valor:</strong>
                    <p>quantidade</p>
                    <button type="button">
                        <FiTrash2 size={18} color="#a8a8b3" />
                    </button>
                </li>
            </ul>

        </div>
    )
}