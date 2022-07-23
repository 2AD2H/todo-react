import { useTodoContext } from "./contexts/todoContext";
import Task from "./task";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { addTask, deleteTaskList, updateTaskList } from "../lib/api";

const Content = (props) => {
  const todoContext = useTodoContext();
  const [complete, setComplete] = useState(true);

  const [taskListName, setTaskListName] = useState(todoContext?.taskList?.name);

  useEffect(() => {
    setTaskListName(todoContext?.taskList?.name);
  }, [todoContext?.taskList]);

  const wrapperClasses = classNames("flex flex-col gap-2", {
    ["hidden"]: complete,
    [""]: !complete,
  });

  const OnClickHandleShowComplete = () => {
    setComplete(!complete);
  };

  const OnClickHandlerInput = (event) => {
    if (event.code !== "Enter" || event.currentTarget.value === "") {
      return;
    } else {
      const newTask = {
        id: 0,
        name: event.currentTarget.value,
        isCompleted: false,
      };
      addTask(newTask, todoContext?.taskListId, todoContext);
      event.currentTarget.value = "";
    }
  };

  const handleDeleteTaskList = async (event) => {
    event.stopPropagation();
    const id = todoContext?.taskListId;
    if (!id) return;
    await deleteTaskList(id, todoContext);
    todoContext?.setTasks([]);
  };

  const handleOnChangeInput = (event) => {
    setTaskListName(event.currentTarget.value);
  };

  const HandleInputTaskList = async (event) => {
    if (event.key !== "Enter" || event.currentTarget.value === "") return;
    const taskListId = todoContext?.taskListId;
    if (!taskListId) return;
    event.currentTarget.blur();
    await updateTaskList({ id: taskListId, name: taskListName }, todoContext);
  };

  const nonCompletedTasks =
    todoContext?.tasks?.filter((task) => !task.isCompleted) ?? [];
  const completedTasks =
    todoContext?.tasks?.filter((task) => task.isCompleted) ?? [];

  const countCompletedTasks = completedTasks.length;

  const completeButton = classNames("", {
    ["hidden"]: countCompletedTasks === 0,
    [""]: countCompletedTasks !== 0,
  });

  return (
    <div className="text-white px-8 py-8 h-full relative">
      {todoContext?.taskList?.name ? (
        <div className="flex justify-between items-center">
          <input
            type="text"
            value={taskListName}
            onKeyUp={HandleInputTaskList}
            onChange={handleOnChangeInput}
            className="text-3xl font-medium text-indigo-400 bg-slate-700 cursor-text border-0 flex-1 min-w-0 focus:ring-0"
          ></input>
          <div className="text-red-500">
            <button onClick={handleDeleteTaskList}>Delete List</button>
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* <p className="text-5xl">{todoContext?.taskList?.name}</p> */}
      <div className="w-full flex flex-col gap-2 pt-16">
        {nonCompletedTasks?.map((task) => (
          <div key={task.name}>
            <Task task={task}></Task>
          </div>
        ))}
        <div className={completeButton}>
          <button
            className="flex gap-2 bg-slate-500 rounded-md px-1 py-1 self-start"
            onClick={OnClickHandleShowComplete}
          >
            {complete ? <span>🔽</span> : <span>🔼</span>}
            <span>Completed</span>
            <span>{countCompletedTasks}</span>
          </button>
        </div>
        <div className={wrapperClasses}>
          {completedTasks?.map((task) => (
            <div key={task.name}>
              <Task task={task}></Task>
            </div>
          ))}
        </div>
        <div className="">
          <div className="absolute bottom-0 left-0 right-0 px-10 py-10">
            <div className="w-full bg-neutral-700 h-16 flex items-center rounded-sm px-3">
              <span className="px-3">⏩</span>
              <input
                type="text"
                className="flex-1 bg-neutral-700 border-0 focus:ring-0 text-white p-0"
                placeholder="Add your Task here"
                onKeyUp={OnClickHandlerInput}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
