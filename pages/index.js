import Layout from '../components/layout'
import { TodoProvider } from '../components/contexts/todoContext'

export default function Home() {

  return (
    <div>
      <TodoProvider>
        <Layout></Layout>
      </TodoProvider>
    </div>
  )
}

