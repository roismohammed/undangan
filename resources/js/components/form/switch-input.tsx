import { forwardRef } from 'react'
import { SwitchInputProps } from '@/types/form'
import { Switch } from '@/components/ui/switch'

const SwitchInput = forwardRef<HTMLInputElement, SwitchInputProps>(
  function SwitchInput(props, ref) {
    const {
      label,
      name,
      errors,
      help,
      className,
      value,
      checked,
      ...otherProps
    } = props

    return (
      <div className="grid max-w-sm items-center gap-1.5">
        <Switch
          name={name}
          id={name}
          checked={value}
          aria-readonly
          {...otherProps}
        />
        {errors && (
          <div className="text-rose-500 text-xs font-normal">{errors}</div>
        )}
      </div>
    )
  }
)

export default SwitchInput
