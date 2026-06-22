export default function AppointmentList({ agendamentos, clientes, onEdit, onDelete }) {
  if (agendamentos.length === 0) return <div className="empty-state">Nenhum agendamento encontrado.</div>;
  const nomeCliente = (id) => clientes.find((cliente) => cliente.id === id)?.nome || 'Cliente removido';
  return (
    <div className="list">
      {[...agendamentos].sort((a, b) => `${a.data} ${a.hora}`.localeCompare(`${b.data} ${b.hora}`)).map((agenda) => (
        <div className="card mb-2" key={agenda.id}>
          <div className="card-body p-3 d-flex justify-content-between gap-2 align-items-center flex-wrap">
            <div><strong>{nomeCliente(agenda.clienteId)} — {agenda.servicos.join(', ')}</strong><div className="small text-muted">{agenda.data} • {agenda.hora} {agenda.observacao && `• ${agenda.observacao}`}</div></div>
            <div className="btn-group"><button className="btn btn-sm btn-outline-secondary" onClick={() => onEdit(agenda)}>✏️ Editar</button><button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(agenda)}>🗑️ Excluir</button></div>
          </div>
        </div>
      ))}
    </div>
  );
}
