import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { getTaskList, getTaskLists, getTasks } from "../../lib/api";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [taskLists, setTasklists] = useState([]); // get the task list in group;
  const [tasks, setTasks] = useState([]); // get task in the task list
  const [taskList, setTaskList] = useState({}); // get the task list
  const [taskListId, setTaskListId] = useState();
  const [taskId, setTaskId] = useState();
  const task = tasks.find((task) => task.id === taskId);

  useEffect(() => {
    (async () => {
      setTasklists(await getTaskLists());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setTaskList(await getTaskList(taskListId));
    })();
    (async () => {
      setTasks(await getTasks(taskListId));
    })();
  }, [taskListId]);

  const value = useMemo(
    () => ({
      taskLists,
      setTasklists,
      tasks,
      setTasks,
      taskList,
      setTaskList,
      taskListId,
      setTaskListId,
      taskId,
      setTaskId,
      task,
    }),
    [task, taskId, taskList, taskListId, taskLists, tasks]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export const useTodoContext = () => useContext(TodoContext);
