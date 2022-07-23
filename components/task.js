import Image from "next/image";
import { updateTask } from "../lib/api";
import { useTodoContext } from "./contexts/todoContext";
import classNames from "classnames";

const Task = ({ task }) => {
  const ctx = useTodoContext();
  const { setTaskId, taskId } = ctx;

  const starCss = classNames("", {
    ["invert"]: task?.isImportant,
    ["invert-0"]: !task?.isImportant,
  });

  const lineThourgh = classNames("", {
    ["line-through"]: task?.isCompleted,
  });

  const OnHandleClickTask = (event) => {
    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLImageElement
    )
      return;
    // set task to display
    else {
      setTaskId(task.id);
    }
  };

  const OnHandleClickCheckbox = async (event) => {
    event.stopPropagation();
    await updateTask({ id: task?.id, isCompleted: !task?.isCompleted }, ctx);
  };

  const handleToggerImportant = async (event) => {
    event.stopPropagation();
    await updateTask({ id: task?.id, isImportant: !task?.isImportant }, ctx);
  };

  return (
    <div
      className="flex gap-4 bg-slate-600 px-8 py-3 justify-between hover:bg-slate-500 rounded-md"
      onClick={OnHandleClickTask}
    >
      <div className="h-8 flex items-center gap-4">
        <input
          type="checkbox"
          className="rounded-full"
          checked={task.isCompleted}
          onChange={OnHandleClickCheckbox}
        ></input>
        <p className={lineThourgh}>{task.name}</p>
      </div>
      <div className="flex items-center justify-center">
        {/* <Image src="/star.svg" height={22} width={22}></Image> */}
        <div className="h-[22px] w-[22px]">
          <button onClick={handleToggerImportant}>
            <img src="/star.svg" className={starCss}></img>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Task;
