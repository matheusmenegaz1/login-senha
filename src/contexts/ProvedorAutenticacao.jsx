import React, { useState } from 'react';
import { ContextoAutenticacao } from './ContextoAutenticacao';

const ProvedorAutenticacao = ({ children }) => {
  const [estadoAutenticacao, setEstadoAutenticacao] = useState(null);
  const [mensagemErro, setMensagemErro] = useState('');

  const signIn = async ({ username, password }) => {
    try {
      const response = await fetch(import.meta.env.VITE_URL_API + '/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
        })
      });

      if (response.ok) {
        const data = await response.json();
        setEstadoAutenticacao(data);
        return true;
      } else {
        const errorMessage = await response.text();
        setMensagemErro(errorMessage);
        return false;
      }
    } catch (error) {
      console.error('Erro durante a autenticação:', error.message);
      return false;
    }
  };

  const signOut = () => {
    setEstadoAutenticacao(null);
  };

  return (
    <ContextoAutenticacao.Provider value={{ estadoAutenticacao, signIn, signOut, mensagemErro }}>
      {children}
    </ContextoAutenticacao.Provider>
  );
};

export default ProvedorAutenticacao;
