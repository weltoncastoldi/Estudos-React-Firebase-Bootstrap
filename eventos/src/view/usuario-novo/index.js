import React, {useState} from 'react'
import firebase from '../../config/firebase';
import 'firebase/auth'

import './usario-novo.css'
import Navbar from '../../components/navbar';

function NovoUsuario(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    function Cadastrar(){
        setMsgTipo(null)
        setCarregando(1)

        if(!email || !senha){
            setMsgTipo('erro')
            setMsg('Voce precisa informar o email e senha para fazer o cadastro')
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso')
            setCarregando(0)
        }).catch(erro =>{
            setCarregando(0)
            setMsgTipo('erro')
            switch (erro.message) {
                case 'Password should be at least 6 characters':
                    setMsg('A senha deve conter no minimo 6 caracteres')
                    break;
                case 'This email address isready in use by another account.':
                    setMsg('Email usado por outra conta')
                    break;
                case 'The email address is badly formatted':
                    setMsg('O formato do email é inválido')
                    break;
                default:
                    setMsg('Não foi possível cadastrar tente mais tarde')
                    break;
            }
        })
    }

    return(
        <>
        <Navbar></Navbar>
        <div className="form-cadastro">
            <form className="text-center form-login mx-auto mt-5">
                <h1 className="h3 text-black font-weigth-bold">Cadastro</h1>

                <input onChange={(e)=> setEmail(e.target.value)}type="email" className="form-control my-2" placeholder="Email"></input>
                <input onChange={(e)=> setSenha(e.target.value)}type="password" className="form-control my-2" placeholder="Senha"></input>
                {
                    carregando ? <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span></div>
                               : <button onClick={Cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>
                }
                <div className="msg-login text-black text-center my-5">
                    {msgTipo === 'sucesso' && <span><strong>Wow!</strong> Usuário cadastrado com sucesso! &#128526;</span>}
                    {msgTipo === 'erro' && <span><strong>Ops!</strong>{msg} &#128549;</span>}
                </div>
            </form>
        </div>
        </>
    )
}

export default NovoUsuario;