import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProvedorAutenticacao from './contexts/ProvedorAutenticacao';
import usarAutenticacao from './contexts/usarAutenticacao';
import Login from './contexts/Login';
import PainelControle from './contexts/PainelControle';

const RotaPrivada = ({ children, ...rest }) => {
  const { estadoAutenticacao } = usarAutenticacao();
  return estadoAutenticacao ? children : <Navigate to="/login" />;
};

const RotaPublica = ({ children, ...rest }) => {
  const { estadoAutenticacao } = usarAutenticacao();
  return !estadoAutenticacao ? children : <Navigate to="/painel-controle" />;
};

const App = () => {
  return (
    <ProvedorAutenticacao>
      <Router>
        <Routes>
          <Route path="/login" element={<RotaPublica><Login /></RotaPublica>} />
          <Route path="/" element={<RotaPrivada><PainelControle /></RotaPrivada>} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ProvedorAutenticacao>
  );
};

export default App;
