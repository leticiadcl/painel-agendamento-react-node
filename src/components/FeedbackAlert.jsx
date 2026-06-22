export default function FeedbackAlert({ type = 'success', message, onClose }) {
  if (!message) return null;
  return (
    <div className={`alert alert-${type} d-flex justify-content-between align-items-center fade show`} role="alert">
      <span><i className="bi bi-info-circle me-2"></i>{message}</span>
      {onClose && <button className="btn-close" onClick={onClose} aria-label="Fechar"></button>}
    </div>
  );
}
