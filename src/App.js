import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState(" ");
  // const[update,doUpdate] = useState(false);
  const [toDolist, setTodolist] = useState([
    {
      title: "Bring Grocerries",
      status: "todo",
    },
    {
      title: "Study React",
      status: "complete",
    },
  ]);

  const onSubmit = (e) => {
    console.log(e.target.value);
    console.log(input);
    const newtask = {
      title: input,
      status: "todo",
    };
    setTodolist([...toDolist, newtask]);
    setInput(" ");
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const oncomplete = (index) => {
    setTodolist((prev) => {
      prev[index].status = "complete";
      console.log(prev, index);

      return prev;
    });
  };

  const deleteItem = (id) => {
    console.log(id);
    const setItems = toDolist[id];
    const updatedItems = toDolist.filter((ind) => {
      // console.log(ind, id);
      return ind.title !== setItems.title;
    });
    setTodolist(updatedItems);
    // console.log(updatedItems, id);
  };

  return (
    <div className="App">
      <input type="text" onChange={onChange} value={input} id="textin" />
      <button onClick={onSubmit}>Add</button>
      <div>
        {toDolist.map((task, index) => {
          console.log(task);
          return (
            <div key={index}>
              <p
                style={{
                  textDecoration:
                    task.status === "complete" ? "line-through" : undefined,
                }}
              >
                {task.title}
              </p>
              <button
                onClick={(e) => {
                  console.log(e);
                  oncomplete(index);
                }}
              >
                complete
              </button>
              <button
                onClick={() => {
                  deleteItem(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
