import Checkmark from './../../icons/check.svg?react'

interface IProps {
  toggleSelection: () => void
  checked: boolean
}

export function Checkbox({ toggleSelection, checked }: IProps) {
  const onChange = () => {
    toggleSelection()
  }

  return (
    <>
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="hidden"
        />
        <span
          className={`flex items-center justify-center w-5 h-5 rounded-[4px] ${checked ? 'border-2 border-transparent bg-[#5754FC]' : 'border-2 border-[#6A6A6A]/30'} transition-all duration-300 ease-in-out`}
        >
          {checked && <Checkmark />}
        </span>
      </label>
    </>
  )
}
