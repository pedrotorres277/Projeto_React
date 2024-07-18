import { useState } from "react";
import "./App.css";
import Itens from "./components/Todo";
import ItensForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [itens, setItens] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addItem = (text, category) => {
    const newItem = [
      ...itens,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setItens(newItem);
  };

  const removeItem = (id) => {
    const newItem = [...itens];
    const filteredItens = newItem.filter((itens) =>
      itens.id !== id ? itens : null
    );
    setItens(filteredItens);
  };

  const completeItem = (id) => {
    const newItem = [...itens];
    newItem.map((itens) =>
      itens.id === id ? (itens.isCompleted = !itens.isCompleted) : itens
    );
    setItens(newItem);
  };
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="itensList">
        {itens
          .filter((itens) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? itens.isCompleted
              : !itens.isCompleted
          )
          .filter((itens) =>
            itens.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((item) => (
            <Itens
              key={itens.id}
              item={item}
              removeItem={removeItem}
              completeItem={completeItem}
            />
          ))}
      </div>
      <ItensForm addItem={addItem} />
    </div>
  );
}

export default App;
