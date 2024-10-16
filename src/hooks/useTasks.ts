import { useContext } from 'react'
import { TasksContext } from './../contexts/TasksContext'

export function useTasks() {
  return useContext(TasksContext)
}
