import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  FC,
  forwardRef,
} from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

interface RadioGroupProps {
  children: ReactNode
  defaultValue: string
  onChange: (value: string) => void
  errors?: string
  name: string
}

const RadioGroupInput: React.FC<RadioGroupProps> & {
  Item: FC<RadioItemProps>
} = ({ children, defaultValue, ...props }) => {
  return (
    <div>
      <RadioGroup
        defaultValue={defaultValue}
        onValueChange={props.onChange}
        name={props.name}
        id={props.name}
      >
        {children}
      </RadioGroup>
      {props.errors && (
        <div className="text-rose-500 text-xs font-normal">{props.errors}</div>
      )}
    </div>
  )
}

interface RadioItemProps {
  value: string
  label: string
}

const RadioItem: React.FC<RadioItemProps> = ({ value, label }) => {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem value={value} id={value} />
      <Label htmlFor={value}>{label}</Label>
    </div>
  )
}

RadioGroupInput.Item = RadioItem

export default RadioGroupInput
