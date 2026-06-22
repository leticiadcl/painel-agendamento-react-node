import { useNavigate } from 'react-router-dom';
import services from '../data/services.json';
import { useSalonData } from '../hooks/useLocalStorage.js';

export default function Home() {
  const navigate = useNavigate();
  const { clientes, agendamentos } = useSalonData();
  return (
    <section>
      <div className="hero-card mb-4">
        <div>
          <span className="badge rounded-pill text-bg-light mb-3">Salão de beleza</span>
          <h1>Painel de Agendamentos com controle de Clientes e Serviços.</h1>
          <p>Aplicação React com rotas, componentes reutilizáveis, estados, hooks, dados simulados em JSON e persistência no LocalStorage.</p>
          <div className="d-flex gap-2 flex-wrap">
            <button className="btn btn-primary" onClick={() => navigate('/agendamentos')}>Criar Agendamento</button>
            <button className="btn btn-outline-light" onClick={() => navigate('/servicos')}>Ver Serviços</button>
          </div>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-md-4"><div className="metric-card"><strong>{clientes.length}</strong><span>Clientes cadastrados</span></div></div>
        <div className="col-md-4"><div className="metric-card"><strong>{agendamentos.length}</strong><span>Agendamentos ativos</span></div></div>
        <div className="col-md-4"><div className="metric-card"><strong>{services.length}</strong><span>Serviços disponíveis</span></div></div>
      </div>
    </section>
  );
}
