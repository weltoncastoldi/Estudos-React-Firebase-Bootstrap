import React from 'react';
import './login.css';

function Login() {
    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4 ">
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-bold text-white">Login</h1>
                </div>
                
                <input type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
                <input type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />
                
                <button className="btn btn-lg btn-login btn-block" type="submit">Sign in</button>
                <div className="msg-login text-white text-center my-5">
                    <span><strong>Wow!</strong> Você está conectado! &#128526;</span>
                    <br/>
                    <span><strong>Ops!</strong> Verifique se a senha ou usuários estão corretos! &#128549;</span>
                </div>
                <div className="opcoes-login mt-5">
                    <a href="#" className="mx-2">Recuperar senha</a>
                    <span className="text-white">&#9733;</span>
                    <a href="#" className="mx-2">Quero cadastrar</a>
                </div>
            </form>
        </div>
    )
}

export default Login;