import { useTodoContext } from "./contexts/todoContext";
import Task from "./task";
import { useState } from "react";
import classNames from "classnames";

const Content = (props) => {
  const todoContext = useTodoContext();
  const [complete, setComplete] = useState(true);

  const wrapperClasses = classNames("flex flex-col gap-2", {
    ["hidden"]: complete,
    [""]: !complete,
  });

  const OnClickHandleShowComplete = () => {
    setComplete(!complete);
  };

  const nonCompletedTasks =
    todoContext?.tasks?.filter((task) => !task.isCompleted) ?? [];
  const completedTasks =
    todoContext?.tasks?.filter((task) => task.isCompleted) ?? [];

  const countCompletedTasks = completedTasks.length;

  return (
    <div className="text-white px-8 py-8">
      <p className="text-5xl">{todoContext?.taskList?.name}</p>
      <div className="w-full flex flex-col gap-2 pt-16">
        {nonCompletedTasks?.map((task) => (
          <div key={task.name}>
            <Task task={task}></Task>
          </div>
        ))}
        <div className="">
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
          <div className="absolute bottom-0 left-80 right-0 px-10 py-10">
            <div className="w-full bg-neutral-700 h-16 flex items-center rounded-sm px-3">
              <span className="px-3">⏩</span>
              <input
                type="text"
                className="flex-1 bg-neutral-700 border-0 focus:ring-0 text-white p-0"
                placeholder="Add your Task here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
