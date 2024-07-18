import React from "react";

const Itens = ({ item, removeItem, completeItem }) => {
  return (
    <div
      className="item"
      style={{ textDecoration: item.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{item.text}</p>
        <p className="category">({item.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeItem(item.id)}>
          Completar
        </button>
        <button onClick={() => removeItem(item.id)} className="remove">
          X
        </button>
      </div>
    </div>
  );
};

export default Itens;
