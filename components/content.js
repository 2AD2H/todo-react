import Task from './task'

const Content = (props) => {
  return (
    <div className="text-white px-8 py-8">
      <p className="text-5xl">TaskList</p>
      <div className="h-full w-full flex flex-col gap-2 pt-16">
        <Task>
        </Task>
      </div>
    </div>
  )
}
export default Content