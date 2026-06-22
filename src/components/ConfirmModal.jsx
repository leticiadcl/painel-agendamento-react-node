export default function ConfirmModal({ show, title, message, onConfirm, onCancel }) {
  if (!show) return null;
  return (
    <div className="modal-backdrop-custom">
      <div className="confirm-box shadow-lg">
        <h4>{title}</h4>
        <p>{message}</p>
        <div className="d-flex gap-2 justify-content-end">
          <button className="btn btn-outline-secondary" onClick={onCancel}>Cancelar</button>
          <button className="btn btn-danger" onClick={onConfirm}>Confirmar</button>
        </div>
      </div>
    </div>
  );
}
