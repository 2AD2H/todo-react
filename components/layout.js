import Content from './Content'
import Sidebar from './sidebar'

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar></Sidebar>
      <div className="bg-slate-700 flex-1 p-4 text-white ">
        <Content></Content>
      </div>
    </div>
  )
}
