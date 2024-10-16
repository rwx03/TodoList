import { Header } from '../components/header/Header'
import { TaskList } from '../components/task-list/TaskList'

export function TaskPage() {
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-[#080812]">
        <Header />
        <TaskList />
      </div>
    </>
  )
}
