import { useState } from 'react';
import ClientForm from '../components/ClientForm.jsx';
import ClientList from '../components/ClientList.jsx';
import ConfirmModal from '../components/ConfirmModal.jsx';
import FeedbackAlert from '../components/FeedbackAlert.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { useSalonData } from '../hooks/useLocalStorage.js';

export default function Clients() {
  const { clientes, salvarCliente, excluirCliente } = useSalonData();
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');
  const [feedback, setFeedback] = useState({ message: '', type: 'success' });
  const [toDelete, setToDelete] = useState(null);

  const filtrados = clientes.filter((cliente) => `${cliente.nome} ${cliente.celular} ${cliente.email}`.toLowerCase().includes(search.toLowerCase()));

  const onSave = (cliente, message, type) => {
    if (!cliente) return setFeedback({ message, type });
    setFeedback({ message: salvarCliente(cliente), type: 'success' });
    setEditing(null);
  };

  return (
    <section>
      <h1 className="page-title">Clientes cadastrados</h1>
      <FeedbackAlert {...feedback} onClose={() => setFeedback({ message: '', type: 'success' })} />
      <ClientForm editing={editing} onSave={onSave} onCancel={() => setEditing(null)} />
      <SearchBar value={search} onChange={setSearch} placeholder="Buscar cliente" />
      <ClientList clientes={filtrados} onEdit={setEditing} onDelete={setToDelete} />
      <ConfirmModal show={!!toDelete} title="Excluir cliente" message="Essa ação também remove os agendamentos vinculados ao cliente." onCancel={() => setToDelete(null)} onConfirm={() => { excluirCliente(toDelete.id); setToDelete(null); setFeedback({ message: 'Cliente e agendamentos vinculados removidos.', type: 'warning' }); }} />
    </section>
  );
}
