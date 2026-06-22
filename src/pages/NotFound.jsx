import { useNavigate, useLocation } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <section className="not-found text-center">
      <h1>404</h1>
      <p>A rota <strong>{location.pathname}</strong> não existe.</p>
      <button className="btn btn-primary" onClick={() => navigate('/')}>Voltar para início</button>
    </section>
  );
}
