import Image from 'next/image'
import { useTodoContext } from './contexts/todoContext'

const TaskPopupDetail = (props) => {
  const { setTaskId } = useTodoContext()

  const OnClickHandleClose = () => {
    setTaskId(null)
  }

  return (
    <div className="relative">
      <div className="bg-slate-900 w-full h-full max-w-[30rem] p-6">
        <div className="absolute top-0 left-0 right-0 h-12 flex justify-end px-2">
          <button onClick={OnClickHandleClose} className="">
            ▶️
          </button>
        </div>
        <div className="flex flex-col gap-5 pt-14">
          {/* task here */}
          <div className="bg-neutral-600 p-7 min-h-[4rem] w-full flex rounded-md gap-10">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="rounded-full"
                checked={props?.task?.isCompleted}
              ></input>
            </div>
            <input
              type="text"
              className=" bg-neutral-600 border-0 cursor-text text-white"
              value={props?.task?.name}
            ></input>
            <div className="flex items-center">
              <Image src="/star.svg" height={22} width={22}></Image>
            </div>
          </div>
          {/* button to add task */}
          <div className="bg-neutral-600 p-7 min-h-[4rem] w-full flex rounded-md gap-10">
            <div className="flex items-center">✨</div>
            <div className="flex items-center text-white">button</div>
          </div>
          {/* note area */}
          <textarea
            className="bg-slate-500 text-neutral-300 rounded-md resize-none overflow-hidden placeholder:text-slate-400"
            placeholder="Note for this task..."
            rows={4}
          ></textarea>
        </div>
        <div></div>
      </div>
    </div>
  )
}
export default TaskPopupDetail
