import React, {useState} from 'react';
import './login.css';
import {Link} from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

import {useSelector, useDispatch} from 'react-redux';


function Login() {
    //Hooks React
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const dispatch = useDispatch();

    function logar(){        
        firebase.auth().signInWithEmailAndPassword(email,senha).then(resultado => {
            setMsgTipo('sucesso')
            dispatch({type: 'LOG_IN', usuarioEmail: email});
        }).catch(erro =>{
            setMsgTipo('erro')
        });
    }

    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4 ">
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-bold text-white">Login</h1>
                </div>
                
                <input onChange={(e)=> setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
                <input onChange={(e)=> setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />
                
                <button onClick={logar} className="btn btn-lg btn-login btn-block" type="button">Logar</button>
                <div className="msg-login text-white text-center my-5">
                    {msgTipo === 'sucesso' && <span><strong>Wow!</strong> Você está conectado! &#128526;</span>}
                    {msgTipo === 'sucesso' && <span><strong>Ops!</strong> Verifique se a senha ou usuários estão corretos! &#128549;</span>}
                </div>
                <div className="opcoes-login mt-5">
                    <a href="#" className="mx-2">Recuperar senha</a>
                    <span className="text-white">&#9733;</span>
                    <Link  to='novousuario' className="mx-2">Quero cadastrar</Link >
                </div>
            </form>
        </div>
    )
}

export default Login;