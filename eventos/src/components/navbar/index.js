import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <span className="navbar-brand text-white font-weigth-bold">Eventos</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                    { useSelector(state => state.usuarioLogado) > 0 ? 
                    <>
                        <li className="nav-item active"><Link className="nav-link" to="">Meus eventos</Link></li>
                        <li className="nav-item active"><Link className="nav-link" to="">Publicar evento</Link></li>
                        <li className="nav-item active"><Link className="nav-link" to="">Sair</Link></li>
                    </>
                    :
                    <>
                        <li className="nav-item active"><Link className="nav-link" to="">Cadastrar</Link></li>
                        <li className="nav-item active"><Link className="nav-link" onClick={()=> dispatch({type: 'LOG_OUT'})}>Login</Link></li>
                    </>
                    };
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;