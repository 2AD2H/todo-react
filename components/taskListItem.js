import { getTasks } from "../lib/api";
import { useTodoContext } from "./contexts/todoContext";

const TaskListItem = ({ taskList }) => {
  const ctx = useTodoContext();

  const OnClickHandleOnClick = async () => {
    ctx?.setTaskListId(taskList.id);
    ctx?.setTasks(await getTasks(taskList.id));
  };

  return (
    <div
      className="rounded-md flex justify-between items-center w-60 hover:bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-2 py-2"
      onClick={OnClickHandleOnClick}
    >
      <div className="flex gap-4">
        <div>✨</div>
        <div>{taskList.name}</div>
      </div>
      <div className="rounded-full bg-neutral-500 flex justify-center items-center px-3 py-1 text-sm">
        {taskList.taskCount}
      </div>
    </div>
  );
};
export default TaskListItem;
