import { NavLink } from 'react-router-dom';

export default function Header({ currentPath }) {
  const links = [
    { to: '/', label: 'Início' },
    { to: '/servicos', label: 'Serviços' },
    { to: '/agendamentos', label: 'Agendamentos' },
    { to: '/clientes', label: 'Clientes' }
  ];

  return (
    <header className="header-clean shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/" title={`Rota atual: ${currentPath}`}>
            <i className="bi bi-scissors header-clean-icon"></i>
            <span className="header-clean-title">Painel de Agendamentos - Salão de Beleza</span>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {links.map((link) => (
                <li className="nav-item" key={link.to}>
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold' : ''}`} to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
