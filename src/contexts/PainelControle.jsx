import React from 'react';
import usarAutenticacao from './usarAutenticacao';

const PainelControle = () => {
  const { estadoAutenticacao, signOut } = usarAutenticacao();

  const handleSair = () => {
    signOut();
  };

  return (
    <div>
      {estadoAutenticacao && (
        <div>
          <h2>Painel de Controle</h2>
          <p>Bem-vindo, {estadoAutenticacao.usuario}!</p>
          <button onClick={handleSair}>Sair</button>
        </div>
      )}
    </div>
  );
};

export default PainelControle;
