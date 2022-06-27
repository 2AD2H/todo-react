import Image from 'next/image'

const Task = (props) => {
  return (
    <div className="flex gap-4 bg-slate-600 px-8 py-3 justify-between hover:bg-slate-500 rounded-md">
      <div className="h-8 flex items-center gap-4">
        <input type="checkbox" className="rounded-full"></input>
        <p>Tasks 1</p>
      </div>
      <div className="flex items-center justify-center">
        <Image src="/star.svg" height={22} width={22}></Image>
      </div>
    </div>
  )
}
export default Task
