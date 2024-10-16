import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { removeTask, toggleSelection } from '../../store/tasksSlice'
import { Checkbox } from '../checkbox/Checkbox'
import { Details } from './Details'
import styles from './Task.module.scss'

interface ITaskProps {
  index: number
  name: string
  selected: boolean
}

export function Task({ index, name, selected }: ITaskProps) {
  const dispatch: AppDispatch = useDispatch()

  const toggleChecked = (): void => {
    dispatch(toggleSelection(index))
  }

  const showDetails = (): void => {
    console.log('Details')
  }

  const deleteTask = (): void => {
    console.log(index)
    dispatch(removeTask(index))
  }

  return (
    <>
      <div className={styles.task}>
        <div className="flex items-center gap-x-6">
          <Checkbox checked={selected} toggleSelection={toggleChecked} />
          <span className={selected ? `line-through` : ''}>{name}</span>
        </div>
        <Details deleteTask={deleteTask} onClick={showDetails} />
      </div>
    </>
  )
}
