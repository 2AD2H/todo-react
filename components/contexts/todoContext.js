import { createContext, useContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextResource = () => {
  const [taskLists, setTasklists] = useState([]); // get the task list in group;
  const [tasks, setTasks] = useState([]); // get task in the task list
  const [taskList, setTaskList] = useState({}); // get the task list


  return {
    taskLists,
    setTasklists,
    tasks,
    setTasks,
    taskList,
    setTaskList,
  };
};

export function TodoProvider({ children }) {
  return (
    <TodoContext.Provider value={TodoContextResource()}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => useContext(TodoContext);
