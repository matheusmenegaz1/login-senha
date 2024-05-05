import React, { useState } from 'react';
import usarAutenticacao from './usarAutenticacao';

const Login = () => {
  const { estadoAutenticacao, signIn } = usarAutenticacao();
  const [credenciais, setCredenciais] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredenciais({ ...credenciais, [e.target.name]: e.target.value });
  };

  const handleEntrar = async (e) => {
    e.preventDefault(); 

    const sucesso = await signIn(credenciais);
    if (!sucesso) {
      alert('Email ou senha inválidos, tente novamente.');
    }
  };

  return (
    <div>
      {!estadoAutenticacao ? (
        <form onSubmit={handleEntrar}>
          <h2>Login</h2>
          <input type="text" name="username" placeholder="Usuário" onChange={handleChange} />
          <input type="password" name="password" placeholder="Senha" onChange={handleChange} />
          <button type="submit">Entrar</button>
        </form>
      ) : (
        <p>Você está logado como {estadoAutenticacao.username}</p>
      )}
    </div>
  );
};

export default Login;
