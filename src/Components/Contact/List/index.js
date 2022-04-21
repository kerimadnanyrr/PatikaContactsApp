import React, { useState } from "react";

function List({ contact }) {
  const [filter, setFilter] = useState("");

  const filtered = contact.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filter.toLocaleLowerCase())
    );
  });
  console.log(filtered);

  const onChangeSubmit = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div>
      <input placeholder="Filter" value={filter} onChange={onChangeSubmit} />
      <ul className="list">
        {filtered.map((contact) => (
          <li>
            <span> {contact.fullname}</span>
            <span> {contact.phone}</span>

          </li>
          
        ))}
      </ul>
    <p> Total: {filtered.length}</p> 
    </div>
  );
}

export default List;
