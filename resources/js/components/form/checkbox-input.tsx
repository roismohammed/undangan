import { forwardRef, Fragment, InputHTMLAttributes } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { CheckboxInputProps } from '@/types/form'

const CheckboxInput = forwardRef<
  InputHTMLAttributes<HTMLInputElement>,
  CheckboxInputProps
>(function CheckboxInput(props, ref) {
  const { name, label, errors } = props
  return (
    <Fragment>
      <div className="items-top flex space-x-2">
        <Checkbox
          id={name}
          onCheckedChange={props.onCheckedChange}
          name={name}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor={name}
            className="text-sm font-medium select-none cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        </div>
      </div>
      {errors && (
        <div className="text-rose-500 text-xs font-normal">{errors}</div>
      )}
    </Fragment>
  )
})

export default CheckboxInput
