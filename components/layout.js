import Content from './content'
import Sidebar from './sidebar'

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar></Sidebar>
      <div className="bg-slate-700 flex-1">
        <Content></Content>
      </div>
    </div>
  )
}
