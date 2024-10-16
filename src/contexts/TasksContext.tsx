import { createContext, ReactNode, useState } from 'react'

interface ITask {
  name: string
  status: number
  selected: boolean
}

interface ITaskContext {
  tasks: ITask[]
  addTask: (newTask: ITask) => void
  toggleSelection: (index: number) => void
  removeTask: (index: number) => void
}

export const TasksContext = createContext<ITaskContext>({} as ITaskContext)

interface ITasksProviderProps {
  children: ReactNode
}

export const TasksProvider: React.FC<ITasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([
    { name: 'Create new project on react', status: 1, selected: false },
    { name: 'Create new project on vue', status: 1, selected: false }
  ])

  const addTask = (newTask: ITask): void => {
    setTasks([...tasks, newTask])
  }

  const toggleSelection = (index: number): void => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, selected: !task.selected } : task
    )
    setTasks(updatedTasks)
  }

  const removeTask = (index: number): void => {
    setTasks(tasks.filter((_, i) => index !== i ))
  }

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, toggleSelection, removeTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}
