import { useEffect, useState } from 'react';

const vazio = { id: null, nome: '', celular: '', email: '' };

function mascaraCelular(valor) {
  const nums = valor.replace(/\D/g, '').slice(0, 11);
  if (nums.length > 6) return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
  if (nums.length > 2) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
  if (nums.length > 0) return `(${nums}`;
  return '';
}

export default function ClientForm({ editing, onSave, onCancel }) {
  const [form, setForm] = useState(vazio);

  useEffect(() => {
    setForm(editing || vazio);
  }, [editing]);

  const submit = (event) => {
    event.preventDefault();
    if (!form.nome.trim()) return onSave(null, 'Nome é obrigatório.', 'danger');
    if (!form.celular.trim()) return onSave(null, 'Celular é obrigatório.', 'danger');
    if (form.email && !form.email.includes('@')) return onSave(null, 'E-mail deve conter @.', 'danger');
    onSave(form);
    setForm(vazio);
  };

  return (
    <form className="card panel-card mb-4" onSubmit={submit}>
      <div className="card-body">
        <h2 className="panel-title">{form.id ? 'Editar Cliente' : 'Criar Cliente'}</h2>
        <label className="form-label">Nome</label>
        <input className="form-control mb-3" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
        <label className="form-label">Celular</label>
        <input className="form-control mb-3" maxLength="15" value={form.celular} onChange={(e) => setForm({ ...form, celular: mascaraCelular(e.target.value) })} placeholder="(00) 00000-0000" />
        <label className="form-label">E-mail</label>
        <input className="form-control mb-3" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <div className="d-flex gap-2">
          <button className="btn btn-primary flex-fill" type="submit">Salvar Cliente</button>
          {form.id && <button className="btn btn-outline-secondary" type="button" onClick={onCancel}>Cancelar</button>}
        </div>
      </div>
    </form>
  );
}
