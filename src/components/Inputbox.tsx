import React, { useContext, useState } from 'react'
import { TodoListContext } from './providers/TodoListProvider';
import type { TodoListState } from '../Types';
import "./Inputbox.scss"

const Inputbox = () => {
  const [inputText, setInput] = useState<string>("");
  const { todoList, setTodoList } = useContext<TodoListState>(TodoListContext);

  const addList = () => {
    let list: string[] = [...todoList];
    list.push(inputText);
    setTodoList(list);
    console.log("addList");
    setInput("");
  }

  return (
    <div className="input">
      <div>追加する TO DO</div>
      <input
        className="inputText"
        type="text"
        value={inputText}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="addButton">
        <button onClick={addList}>追加</button>
      </div>
    </div>
  );
}

export default Inputbox