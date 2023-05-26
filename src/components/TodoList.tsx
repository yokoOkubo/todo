import React, { useContext } from 'react'
import type { TodoListState } from '../Types'
import { TodoListContext } from './providers/TodoListProvider'
import './TodoList.scss';

const TodoList = () => {
  const {todoList, setTodoList} = useContext<TodoListState>(TodoListContext);

  const deleteTodo = (index: number) => {
    console.log("del index=", index);
    const list = [...todoList]
    list.splice(index, 1);
    setTodoList(list);
  }
  return (
    <div className="list">
      <h2>To Do 一覧</h2>
      <ul>
        {todoList.map((todo: string, index: number) => (
          <li>
            {todo}
            <button
              onClick={() => {
                deleteTodo(index);
              }}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList