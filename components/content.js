import { useTodoContext } from './contexts/todoContext'
import Task from './task'

const Content = (props) => {
  const todoContext = useTodoContext()

  const tasks = todoContext?.tasks
  return (
    <div className="text-white px-8 py-8">
      <p className="text-5xl">{todoContext?.taskList}</p>
      <div className="h-full w-full flex flex-col gap-2 pt-16">
        {tasks?.map((task) => (
          <div key={task.name}>
          <Task task={task}></Task>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Content
