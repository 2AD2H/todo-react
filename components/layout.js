import Content from "./content";
import { TodoContext, useTodoContext } from "./contexts/todoContext";
import Sidebar from "./sidebar";
import TaskPopupDetail from "./taskPopupDetail";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect } from "react";
import { getTaskLists, getTasks } from "../lib/api";

export default function Layout({ children }) {
  const ctx = useTodoContext();
  const { taskId, task, setTasklists, setTasks } = useTodoContext();
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (isLoading || error || !user) return;
    (async () => {
      setTasklists(await getTaskLists());
    })();
    (async () => {
      setTasks(await getTasks());
    })();
  }, [error, isLoading, setTasklists, setTasks, user]);

  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar user={user ? user : null}></Sidebar>
      {user && (
        <div className="bg-slate-700 flex-1 flex relative">
          <div className="flex-1">
            <Content></Content>
          </div>
          {taskId ? <TaskPopupDetail task={task}></TaskPopupDetail> : <></>}
        </div>
      )}
    </div>
  );
}

// dummy TaskLists
export const dummyTaskList = [
  {
    id: 1,
    name: "TaskList 1",
    count: 2,
    tasks: [
      {
        id: 1,
        name: "task 1-1",
        isCompleted: true,
      },
      {
        id: 2,
        name: "task 1-2",
        isCompleted: false,
      },
    ],
  },
  {
    id: 2,
    name: "TaskList 2",
    count: 1,
    tasks: [
      {
        id: 1,
        name: "task 2-1",
        isCompleted: true,
      },
    ],
  },
  {
    id: 3,
    name: "TaskList 3",
    count: 3,
    tasks: [
      {
        id: 1,
        name: "task 3-1",
        isCompleted: true,
      },
      {
        id: 2,
        name: "task 3-2",
        isCompleted: false,
      },
      {
        id: 3,
        name: "task 3-3",
        isCompleted: true,
      },
    ],
  },
];
