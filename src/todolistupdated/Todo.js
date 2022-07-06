import React, { useState } from "react";

const Todo = () => {
  const [inptVal, setInpt] = useState();
  const [items, setItems] = useState([]);
  const [toggleBtn, setToggle] = useState(true);
  const [editItem, setEdititem] = useState();
  const changefun = (e) => {
    setInpt(e.target.value);
  };
  const clickfun = () => {
    if (!inptVal) {
      alert("empty value");
    } else if (inptVal && !toggleBtn) {
      setItems(
        items.map((elem) => {
          if (elem.id === editItem) {
            return { ...elem, name: inptVal };
          }
          return elem;
        })
      );
      setToggle(true);
      setInpt([]);
      setEdititem(null);
    } else {
      setItems((prev) => {
        let ival = { id: new Date().getTime().toString(), name: inptVal };
        console.log(ival);
        return [...prev, ival];
      });
      setInpt("");
    }
  };
  const editEvent = (id) => {
    let newEdititem = items.find((elem) => {
      return elem.id === id;
    });

    setToggle(false);
    setInpt(newEdititem.name);
    setEdititem(id);
  };
  const removeEvent = (id) => {
    const upadtedItem = items.filter((elem) => {
      return elem.id !== id;
    });
    setItems(upadtedItem);
  };
  const remAll = () => {
    setItems([]);
  };

  return (
    <>
      <div>
        <div>
          <h1>ToDoList</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Reminder List"
            onChange={changefun}
            value={inptVal}
          />
          {toggleBtn ? (
            <button onClick={clickfun}>+</button>
          ) : (
            <button onClick={clickfun}>*</button>
          )}
        </div>
        <div>
          <ul>
            {items.map((v) => {
              return (
                <li key={v.id}>
                  {v.name}
                  <span>
                    <button
                      onClick={() => {
                        return editEvent(v.id);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => {
                        return removeEvent(v.id);
                      }}
                    >
                      Detete
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <button onClick={remAll}>Remove All</button>
      </div>
    </>
  );
};
export default Todo;
