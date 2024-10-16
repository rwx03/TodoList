import { useEffect, useRef, useState } from 'react'
import Checkmarks from './../../icons/checkmarks.svg?react'
import Trash from './../../icons/trash.svg?react'
import styles from './Details.module.scss'

interface IProps {
  onClick: () => void
  deleteTask: () => void
  markAsComplete?: () => void
}

export function Details({ onClick, deleteTask, markAsComplete }: IProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    onClick()
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsVisible(false)
      }
    }

    if (isVisible) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isVisible])

  return (
    <>
      <div className="relative">
        <div
          onClick={handleClick}
          className="cursor-pointer rounded-full hover:bg-white/10 transition-colors duration-300 ease-in-out  z-30"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 13.2C17.3373 13.2 16.8 12.6627 16.8 12C16.8 11.3372 17.3373 10.8 18 10.8C18.6628 10.8 19.2 11.3372 19.2 12C19.2 12.6627 18.6628 13.2 18 13.2Z"
              fill="white"
            />
            <path
              d="M12.0001 13.2C11.3374 13.2 10.8001 12.6627 10.8001 12C10.8001 11.3372 11.3374 10.8 12.0001 10.8C12.6629 10.8 13.2001 11.3372 13.2001 12C13.2001 12.6627 12.6629 13.2 12.0001 13.2Z"
              fill="white"
            />
            <path
              d="M6.00005 13.2C5.33731 13.2 4.80005 12.6627 4.80005 12C4.80005 11.3372 5.33731 10.8 6.00005 10.8C6.66279 10.8 7.20005 11.3372 7.20005 12C7.20005 12.6627 6.66279 13.2 6.00005 13.2Z"
              fill="white"
            />
          </svg>
        </div>
        {isVisible && (
          <div
            ref={menuRef}
            className={`w-40 h-20 rounded-[4px] border border-[#2C2A37] absolute right-0 top-[calc(100%+4px)] bg-[#080812] z-40 transition-opacity duration-300 ease-out opacity-100 transform translate-y-0`}
          >
            <button onClick={deleteTask} className={styles.detailsButton}>
              <label>
                <span>Delete task</span>
                <Trash />
              </label>
            </button>
            <button onClick={markAsComplete} className={styles.detailsButton}>
              <label>
                <span>Mark completed</span>
                <Checkmarks />
              </label>
            </button>
          </div>
        )}
      </div>
    </>
  )
}
