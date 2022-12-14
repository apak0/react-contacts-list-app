import {useState} from "react";

function List({ contacts }) {

  const [filterText , setFilterText] = useState("");

  const filtered = contacts.filter((item)=> {
    return Object.keys(item).some((key)=>
      item[key]
      .toString()
      .toLowerCase().includes(filterText.toLocaleLowerCase())
    )
  });

  


  return (
    <div>

      <input placeholder="Filter Contact" value={filterText} onChange={ (e) => setFilterText(e.target.value)}/>

      <ul className="list">
        {filtered.map((item, index) => (
          <li key={index}>
            <span>{item.fullname}</span> 
            <span>{item.phone_number}</span> 
             </li>
        ))}
      </ul>
      <p>{filtered.length} Contact Founded</p>
    </div>
  );
}

export default List;
