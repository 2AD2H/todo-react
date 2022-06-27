const TaskListItem = ({taskList}) => {
  return (
    <div className="rounded-md flex justify-between items-center w-60 hover:bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-2 py-2">
      <div className="flex gap-4">
        <div>✨</div>
        <div>{taskList.name}</div>
      </div>
      <div className="rounded-full bg-neutral-500 flex justify-center items-center px-3 py-1 text-sm">
        {taskList.count}
      </div>
    </div>
  )
}
export default TaskListItem
