import Content from './content'
import { useTodoContext } from './contexts/todoContext'
import Sidebar from './sidebar'

export default function Layout({ children }) {
  const todoContext = useTodoContext()

  todoContext.setTasklists(dummyTaskList) // Todo: call api to get task list

  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar taskLists={todoContext?.taskLists}></Sidebar>
      <div className="bg-slate-700 flex-1">
        <Content></Content>
      </div>
    </div>
  )
}

// dummy TaskLists
const dummyTaskList = [
  {
    id: 1,
    name: 'TaskList 1',
    count: 2,
    tasks: [
      {
        name: 'task 1-1',
        isCompleted: false,
      },
      {
        name: 'task 2-1',
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
        isCompleted: false,
      },
    ],
  },
]
