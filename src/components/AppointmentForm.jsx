import { useEffect, useState } from 'react';
import services from '../data/services.json';

const vazio = { id: null, clienteId: '', data: '', hora: '', servicos: [], observacao: '' };

export default function AppointmentForm({ clientes, editing, selectedService, onSave, onCancel }) {
  const [form, setForm] = useState(vazio);

  useEffect(() => {
    setForm(editing || { ...vazio, servicos: selectedService ? [selectedService] : [] });
  }, [editing, selectedService]);

  const alternarServico = (nome) => {
    setForm((atual) => ({
      ...atual,
      servicos: atual.servicos.includes(nome) ? atual.servicos.filter((item) => item !== nome) : [...atual.servicos, nome]
    }));
  };

  const submit = (event) => {
    event.preventDefault();
    if (!form.clienteId) return onSave(null, 'Selecione um cliente.', 'danger');
    if (!form.data || !form.hora) return onSave(null, 'Data e hora são obrigatórias.', 'danger');
    if (form.servicos.length === 0) return onSave(null, 'Selecione pelo menos um serviço.', 'danger');
    onSave({ ...form, clienteId: Number(form.clienteId) });
    setForm(vazio);
  };

  return (
    <form className="card panel-card mb-4" onSubmit={submit}>
      <div className="card-body">
        <h2 className="panel-title">{form.id ? 'Editar Agendamento' : 'Criar Agendamento'}</h2>
        <label className="form-label">Cliente</label>
        <select className="form-select mb-3" value={form.clienteId} onChange={(e) => setForm({ ...form, clienteId: e.target.value })}>
          <option value="">-- selecione um cliente --</option>
          {clientes.map((cliente) => <option key={cliente.id} value={cliente.id}>{cliente.nome} • {cliente.celular}</option>)}
        </select>
        <label className="form-label">Serviços</label>
        <div className="d-flex flex-wrap gap-2 mb-3">
          {services.map((servico) => (
            <button key={servico.id} type="button" className={`btn service-pill ${form.servicos.includes(servico.nome) ? 'active' : ''}`} onClick={() => alternarServico(servico.nome)} title={servico.descricao}>{servico.nome}</button>
          ))}
        </div>
        <div className="row">
          <div className="col-md-6"><label className="form-label">Data</label><input type="date" className="form-control mb-3" value={form.data} onChange={(e) => setForm({ ...form, data: e.target.value })} /></div>
          <div className="col-md-6"><label className="form-label">Hora</label><input type="time" className="form-control mb-3" value={form.hora} onChange={(e) => setForm({ ...form, hora: e.target.value })} /></div>
        </div>
        <label className="form-label">Observação</label>
        <input className="form-control mb-3" value={form.observacao} onChange={(e) => setForm({ ...form, observacao: e.target.value })} />
        <div className="d-flex gap-2"><button className="btn btn-success flex-fill" type="submit">Salvar Agendamento</button>{form.id && <button className="btn btn-outline-secondary" type="button" onClick={onCancel}>Cancelar</button>}</div>
      </div>
    </form>
  );
}
