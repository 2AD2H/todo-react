import Content from './content'
import { useTodoContext } from './contexts/todoContext'
import Sidebar from './sidebar'
import TaskPopupDetail from './taskPopupDetail'

export default function Layout({ children }) {
  const todoContext = useTodoContext()

  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar></Sidebar>
      <div className="bg-slate-700 flex-1 flex relative">
        <div className="flex-1">
          <Content></Content>
        </div>
        <TaskPopupDetail></TaskPopupDetail>
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
        name: 'task 1-1',
        isCompleted: true,
      },
      {
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
        name: 'task 3-1',
        isCompleted: true,
      },
      {
        name: 'task 3-2',
        isCompleted: false,
      },
      {
        name: 'task 3-3',
        isCompleted: true,
      },
    ],
  },
]
