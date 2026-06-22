import { useNavigate } from 'react-router-dom';

export default function ServiceCard({ service }) {
  const navigate = useNavigate();
  return (
    <article className="service-card h-100">
      <div className="service-icon"><i className={`bi ${service.icone}`}></i></div>
      <h3>{service.nome}</h3>
      <p>{service.descricao}</p>
      <div className="d-flex justify-content-between small mb-3">
        <span>{service.duracao}</span><strong>R$ {service.preco},00</strong>
      </div>
      <button className="btn btn-primary w-100" onClick={() => navigate(`/agendamentos?servico=${encodeURIComponent(service.nome)}`)} title="Ir para agendamento com este serviço">
        Agendar serviço
      </button>
    </article>
  );
}
