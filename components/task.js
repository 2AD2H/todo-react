import Image from 'next/image'
import { useTodoContext } from './contexts/todoContext'

const Task = ({ task }) => {
  const { setTaskId,taskId } = useTodoContext()

  const OnHandleClickTask = (event) => {
    if (event.target === HTMLInputElement || event.target === HTMLImageElement)
      return
    // set task to display
    else {
      setTaskId(task.id)
    }
  }

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
        ></input>
        <p>{task.name}</p>
      </div>
      <div className="flex items-center justify-center">
        <Image src="/star.svg" height={22} width={22}></Image>
      </div>
    </div>
  )
}
export default Task
