import { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard.jsx';
import SearchBar from '../components/SearchBar.jsx';
import servicesJson from '../data/services.json';

export default function Services() {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setServices(servicesJson);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const filtrados = services.filter((item) => `${item.nome} ${item.categoria}`.toLowerCase().includes(search.toLowerCase()));

  return (
    <section>
      <h1 className="page-title">Serviços disponíveis</h1>
      <SearchBar value={search} onChange={setSearch} placeholder="Buscar serviço" />
      {loading && <div className="loading-box">Carregando serviços cadastrados...</div>}
      {!loading && filtrados.length === 0 && <div className="empty-state">Nenhum serviço encontrado.</div>}
      <div className="row g-4">
        {filtrados.map((service) => <div className="col-md-6 col-lg-4" key={service.id}><ServiceCard service={service} /></div>)}
      </div>
    </section>
  );
}
