import React, { useState } from "react";
import "./App.css";

function App() {
  var [newItem, setNewItem] = useState("");
  var [items, setItems] = useState([]);

  const itemHandler = (event) => {
    setNewItem((newItem = event.target.value));
  };

  const addItem = () => {
    if (!newItem) {
      alert("Enter an Item");
      return;
    } else {
      setItems((items) => [...items, newItem]);
    }
    setNewItem("");
  };

  return (
    <div className="App">
      <div className="header">
        <h2>TODO LIST</h2>

        <input
          type="text"
          value={newItem}
          placeholder="Add item"
          onChange={itemHandler}
        />
        <button onClick={addItem}>Add</button>
      </div>
      
      <div className="box">
        <div className="contain">
          <table>
            {items.map((value, index) => {
              return (
                <tr>
                  <td>
                    <input type="checkbox" key={index} />
                  </td>
                  <td align="left">{value}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
