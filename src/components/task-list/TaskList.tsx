import { useSelector } from 'react-redux'
import { RootState } from './../../store/store'
import { Task } from '../task/Task'

export function TaskList() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

  return (
    <>
      <div className="flex flex-col w-full items-center h-full mt-5">
        {tasks.map((task, i) => (
          <Task
            key={i}
            index={i}
            name={task.name}
            selected={task.selected}
          ></Task>
        ))}
      </div>
    </>
  )
}
