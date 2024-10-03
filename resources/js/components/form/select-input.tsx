import React, { useEffect } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { cn } from '@/lib/utils'

type SelectInputProps = {
  children?: React.ReactNode
  name: string
  errors?: string
  placeholder?: string
  help?: string
  className?: string
  onSelect: (value: string | any) => void
  variant?: 'simple' | 'select2'
  options: Array<{ value: string; label: string }>
  value: string | any
}

const SelectInput: React.FC<SelectInputProps> &
  React.InputHTMLAttributes<HTMLInputElement> = ({
  children,
  variant = 'simple',
  options = [],
  onSelect,
  ...props
}) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  const handleSelect = (value: string) => {
    setOpen(false)
    setValue(value)
  }

  useEffect(() => {
    if (props.value) {
      const selected: string | any = options.find(
        option => option.value == props.value
      )?.label
      setValue(selected)
    }
  }, [])

  const handleSimpleSelect = (option: { value: string; label: string }) => {
    onSelect(option.value)
  }

  if (variant == 'simple') {
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger
            className={cn(
              'w-full transition ease-in-out duration-200 border focus-visible:ring focus-visible:ring-slate-200 focus-visible:outline focus-visible:outline-slate-200 focus-visible:border focus-visible:border-primary disabled:cursor-not-allowed',
              props.errors
                ? 'transition ease-in-out duration-200 border border-rose-500 focus:ring-rose-200 focus-visible:ring focus-visible:ring-rose-200 focus-visible:outline focus-visible:outline-rose-200 focus-visible:border focus-visible:border-rose-500'
                : ''
            )}
          >
            <SelectValue placeholder={value || props.placeholder} />
          </SelectTrigger>
          <SelectContent aria-label={props.name} id={props.name}>
            {options.length > 0 ? (
              options.map(option => (
                <SelectItem
                  onPointerDown={() => handleSimpleSelect(option)}
                  className={'cursor-pointer'}
                  key={option.value}
                  value={option.label}
                >
                  {option.label}
                </SelectItem>
              ))
            ) : (
              <div
                className={cn(
                  'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
                )}
              >
                Tidak ada pilihan
              </div>
            )}
          </SelectContent>
        </Select>
        {props.errors && (
          <div className="text-rose-500 text-xs font-normal">
            {props.errors}
          </div>
        )}
      </div>
    )
  } else {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          className={cn(
            'w-full transition ease-in-out duration-200 border focus-visible:ring focus-visible:ring-slate-200 focus-visible:outline focus-visible:outline-slate-200 focus-visible:border focus-visible:border-primary disabled:cursor-not-allowed',
            props.errors
              ? 'transition ease-in-out duration-200 border border-rose-500 focus:ring-rose-200 focus-visible:ring focus-visible:ring-rose-200 focus-visible:outline focus-visible:outline-rose-200 focus-visible:border focus-visible:border-rose-500'
              : ''
          )}
          asChild
        >
          <Button
            variant="outline"
            role="combobox"
            className={cn('w-full justify-between')}
          >
            {value
              ? options.find(option => option.value === value)?.label
              : props.placeholder}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 popover-content">
          <Command>
            <CommandInput
              placeholder={`Cari daftar ${props.name}...`}
              className="h-9"
            />
            <CommandEmpty>No {props.name} found.</CommandEmpty>
            <CommandGroup>
              <CommandList className={'w-full'}>
                {options.map(option => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={value => handleSelect(value)}
                  >
                    {option.label}
                    <CheckIcon
                      className={cn(
                        'ml-auto h-4 w-4',
                        value === option.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }
}

export default SelectInput
