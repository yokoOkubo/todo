import React, { createContext, useState } from 'react'
import type { TodoListState } from '../../Types';




export const TodoListContext = createContext<TodoListState>(
  {} as {
    todoList: string[];
    setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
  }
);

export const TodoListProvider = (props:any) => {
  const {children} = props;
  const [todoList, setTodoList] = useState<string[]>([]);
  return (
    <TodoListContext.Provider value={{ todoList, setTodoList }}>
      {/* valueはオブジェクトのプロパティ名と設定する変数名が同じため省略している*/}
      {children}
    </TodoListContext.Provider>
  );
}
