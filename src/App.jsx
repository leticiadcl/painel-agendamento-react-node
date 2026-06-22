import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const location = useLocation();
  return (
    <div className="app-shell">
      <Header currentPath={location.pathname} />
      <main className="container py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
