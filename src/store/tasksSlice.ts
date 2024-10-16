import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ITask {
  name: string
  status: number
  selected: boolean
}

interface TasksState {
  tasks: ITask[]
}

const initialState: TasksState = {
  tasks: [
    { name: 'Создать новый проект на React', status: 1, selected: false },
    { name: 'Создать новый проект на Vue', status: 1, selected: false }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload)
    },
    toggleSelection: (state, action: PayloadAction<number>) => {
      const task = state.tasks[action.payload]
      if (task) {
        task.selected = !task.selected
      }
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((_, i) => i !== action.payload)
    }
  }
})

export const { addTask, toggleSelection, removeTask } = tasksSlice.actions
export default tasksSlice.reducer
