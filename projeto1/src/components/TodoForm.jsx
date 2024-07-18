import { useState } from "react";

const ItensForm = ({ addItem }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addItem(value, category);
    setValue("");
    setCategory("");
  };
  return (
    <div className="itensForm">
      <h2>Criar tabela:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Digite o Titulo"
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default ItensForm;
