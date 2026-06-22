export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="input-group mb-3 search-box" title="Digite para filtrar os registros">
      <span className="input-group-text"><i className="bi bi-search"></i></span>
      <input className="form-control" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}
