import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/global.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Appointments from './pages/Appointments.jsx';
import Clients from './pages/Clients.jsx';
import NotFound from './pages/NotFound.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="servicos" element={<Services />} />
          <Route path="agendamentos" element={<Appointments />} />
          <Route path="clientes" element={<Clients />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
