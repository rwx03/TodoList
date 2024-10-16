import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { addTask } from '../../store/tasksSlice'
import { HorizontalSeparator } from '../elements/HorizontalSeparator'
import styles from './Header.module.scss'

export function Header() {
  const [taskName, setTaskName] = useState('')
  const dispatch: AppDispatch = useDispatch()

  const addTaskToList = (): void => {
    if (taskName === '') {
      toast.error('Task name is empty!', {
        position: 'top-right'
      })
      return
    }

    dispatch(
      addTask({
        name: taskName,
        status: 1,
        selected: false
      })
    )
    toast.success(`${taskName} was added to list`, {
      position: 'top-right'
    })
    setTaskName('')
  }

  return (
    <>
      <div className="max-w-[516px] w-full  max-h-[60px] h-full mt-[52px] flex mb-[30px]">
        <input
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value)
          }}
          placeholder="Enter task name"
          className={styles.taskInput}
        ></input>
        <button onClick={addTaskToList} className={styles.addTask}>
          <span>Add task</span>
        </button>
      </div>
      <HorizontalSeparator />
    </>
  )
}
