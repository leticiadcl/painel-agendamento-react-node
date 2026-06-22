export default function ClientList({ clientes, onEdit, onDelete }) {
  if (clientes.length === 0) return <div className="empty-state">Nenhum cliente encontrado.</div>;
  return (
    <div className="list">
      {clientes.map((cliente) => (
        <div className="card mb-2" key={cliente.id}>
          <div className="card-body p-3 d-flex justify-content-between gap-2 align-items-center flex-wrap">
            <div>
              <strong>{cliente.nome}</strong>
              <div className="small text-muted">{cliente.celular} {cliente.email && `• ${cliente.email}`}</div>
            </div>
            <div className="btn-group">
              <button className="btn btn-sm btn-outline-secondary" onClick={() => onEdit(cliente)} title="Editar cliente">✏️ Editar</button>
              <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(cliente)} title="Remove cliente e seus agendamentos">🗑️ Excluir</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
