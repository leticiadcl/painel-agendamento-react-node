import { useEffect, useState } from 'react';
import seed from '../data/seed.json';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export function useSalonData() {
  const [clientes, setClientes] = useLocalStorage('react_salao_clientes_v1', seed.clientes);
  const [agendamentos, setAgendamentos] = useLocalStorage('react_salao_agendamentos_v1', seed.agendamentos);

  const salvarCliente = (cliente) => {
    if (cliente.id) {
      setClientes((atual) => atual.map((item) => item.id === cliente.id ? cliente : item));
      return 'Cliente atualizado com sucesso!';
    }
    const novo = { ...cliente, id: Date.now() };
    setClientes((atual) => [...atual, novo]);
    return 'Cliente cadastrado com sucesso!';
  };

  const excluirCliente = (id) => {
    setClientes((atual) => atual.filter((cliente) => cliente.id !== id));
    setAgendamentos((atual) => atual.filter((agenda) => agenda.clienteId !== id));
  };

  const salvarAgendamento = (agendamento) => {
    if (agendamento.id) {
      setAgendamentos((atual) => atual.map((item) => item.id === agendamento.id ? agendamento : item));
      return 'Agendamento atualizado com sucesso!';
    }
    const novo = { ...agendamento, id: Date.now() };
    setAgendamentos((atual) => [...atual, novo]);
    return 'Agendamento criado com sucesso!';
  };

  const excluirAgendamento = (id) => {
    setAgendamentos((atual) => atual.filter((agenda) => agenda.id !== id));
  };

  return { clientes, agendamentos, salvarCliente, excluirCliente, salvarAgendamento, excluirAgendamento };
}
