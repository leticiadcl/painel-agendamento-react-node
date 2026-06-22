import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm.jsx';
import AppointmentList from '../components/AppointmentList.jsx';
import ConfirmModal from '../components/ConfirmModal.jsx';
import FeedbackAlert from '../components/FeedbackAlert.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { useSalonData } from '../hooks/useLocalStorage.js';

export default function Appointments() {
  useParams();
  const location = useLocation();
  const selectedService = new URLSearchParams(location.search).get('servico');
  const { clientes, agendamentos, salvarAgendamento, excluirAgendamento } = useSalonData();
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');
  const [feedback, setFeedback] = useState({ message: selectedService ? `Serviço selecionado: ${selectedService}` : '', type: 'info' });
  const [toDelete, setToDelete] = useState(null);

  const nomeCliente = (id) => clientes.find((cliente) => cliente.id === id)?.nome || '';
  const filtrados = agendamentos.filter((agenda) => `${nomeCliente(agenda.clienteId)} ${agenda.servicos.join(' ')} ${agenda.data}`.toLowerCase().includes(search.toLowerCase()));

  const onSave = (agenda, message, type) => {
    if (!agenda) return setFeedback({ message, type });
    setFeedback({ message: salvarAgendamento(agenda), type: 'success' });
    setEditing(null);
  };

  return (
    <section>
      <h1 className="page-title">Agendamentos ativos</h1>
      <FeedbackAlert {...feedback} onClose={() => setFeedback({ message: '', type: 'success' })} />
      {clientes.length === 0 && <FeedbackAlert type="warning" message="Cadastre o cliente antes de criar um agendamento." />}
      <AppointmentForm clientes={clientes} editing={editing} selectedService={selectedService} onSave={onSave} onCancel={() => setEditing(null)} />
      <SearchBar value={search} onChange={setSearch} placeholder="Buscar agendamento" />
      <AppointmentList agendamentos={filtrados} clientes={clientes} onEdit={setEditing} onDelete={setToDelete} />
      <ConfirmModal show={!!toDelete} title="Excluir agendamento" message="Deseja realmente remover este horário da agenda?" onCancel={() => setToDelete(null)} onConfirm={() => { excluirAgendamento(toDelete.id); setToDelete(null); setFeedback({ message: 'Agendamento removido.', type: 'warning' }); }} />
    </section>
  );
}
