import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { getTaskList, getTaskLists, getTasks } from "../../lib/api";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [taskLists, setTasklists] = useState([]); // get the task list in group;
  const [tasks, setTasks] = useState([]); // get task in the task list
  const [taskListId, setTaskListId] = useState();
  const [taskId, setTaskId] = useState();
  const task = tasks && tasks.find((task) => task.id === taskId);
  const taskList =
    taskLists && taskLists.find((taskList) => taskList.id === taskListId);

  const value = useMemo(
    () => ({
      taskLists,
      setTasklists,
      tasks,
      setTasks,
      taskListId,
      setTaskListId,
      taskId,
      setTaskId,
      task,
      taskList,
    }),
    [task, taskId, taskList, taskListId, taskLists, tasks]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export const useTodoContext = () => useContext(TodoContext);
