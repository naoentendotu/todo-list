const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Buscar</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite o nome da tarefa..."
      />
    </div>
  );
};

export default Search;
