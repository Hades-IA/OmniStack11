import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logosvg from '../../assents/logo.svg';
import './styles.css';

export default function NewIncident() {
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
                <form method="" action="">
                    <input placeholder="Titulo do Caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em Reais" />

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}