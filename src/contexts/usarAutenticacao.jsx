import { useContext } from 'react';
import { ContextoAutenticacao } from './ContextoAutenticacao';

const usarAutenticacao = () => {
  return useContext(ContextoAutenticacao);
};

export default usarAutenticacao;
