import Content from './content'
import { TodoContext, useTodoContext } from './contexts/todoContext'
import Sidebar from './sidebar'
import TaskPopupDetail from './taskPopupDetail'

export default function Layout({ children }) {
  const { taskId, task } = useTodoContext()
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar></Sidebar>
      <div className="bg-slate-700 flex-1 flex relative">
        <div className="flex-1">
          <Content></Content>
        </div>
        {taskId ? <TaskPopupDetail task={task}></TaskPopupDetail> : <></>}
      </div>
    </div>
  )
}

// dummy TaskLists
export const dummyTaskList = [
  {
    id: 1,
    name: 'TaskList 1',
    count: 2,
    tasks: [
      {
        id: 1,
        name: 'task 1-1',
        isCompleted: true,
      },
      {
        id: 2,
        name: 'task 1-2',
        isCompleted: false,
      },
    ],
  },
  {
    id: 2,
    name: 'TaskList 2',
    count: 1,
    tasks: [
      {
        id: 1,
        name: 'task 2-1',
        isCompleted: true,
      },
    ],
  },
  {
    id: 3,
    name: 'TaskList 3',
    count: 3,
    tasks: [
      {
        id: 1,
        name: 'task 3-1',
        isCompleted: true,
      },
      {
        id: 2,
        name: 'task 3-2',
        isCompleted: false,
      },
      {
        id: 3,
        name: 'task 3-3',
        isCompleted: true,
      },
    ],
  },
]
