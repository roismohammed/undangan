import React, { forwardRef, useEffect, useState } from 'react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { CalendarIcon } from '@radix-ui/react-icons'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import moment from 'moment/moment'
import { useNavigation } from 'react-day-picker'
import { id } from 'date-fns/locale/id'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { DateInputProps } from '@/types/form'

const months = [...Array(12)].map((_, index) => {
  const month_number = index.toString()
  const month_name = new Intl.DateTimeFormat('id-ID', { month: 'long' }).format(
    new Date(2022, index)
  )
  return { month_number, month_name }
})

const MONTHS = [...Array(12)].map((_, index) => {
  const month_name = new Intl.DateTimeFormat('id-ID', { month: 'long' }).format(
    new Date(2022, index)
  )
  return month_name
})

const CustomCaption = () => {
  const { goToMonth, nextMonth, previousMonth, goToDate, isDateDisplayed } =
    useNavigation()
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const startYear = 1947 // Anda dapat mengganti tahun awal sesuai kebutuhan
  const [month, setMonth] = useState('')
  const [yearSelected, setYearSelected] = useState<string>('')
  const [monthSelected, setMonthSelected] = useState<string>('')

  return (
    <div className={'flex py-1 justify-between items-center border-slate-100'}>
      <Button
        size={'sm'}
        variant={'outline'}
        className={'px-2 shadow-none border-none'}
      >
        <IconChevronLeft size={16} />
      </Button>
      <div className="dropdown-wrapper flex">
        <div className="option-year flex items-center gap-2">
          <Select
            value={yearSelected}
            onValueChange={value => {
              goToDate(new Date(parseInt(value), 0, 1))
              setYearSelected(value)
            }}
          >
            <SelectTrigger
              className={
                'w-[80px] hover:bg-slate-50 focus-visible:bg-slate-50  focus:bg-slate-100 h-7 text-center border-0 shadow-none focus:ring-0 '
              }
            >
              <SelectValue placeholder={new Date().getFullYear()} />
            </SelectTrigger>
            <SelectContent position="popper">
              {Array.from(
                { length: new Date().getFullYear() - 1945 + 1 },
                (_, i) => new Date().getFullYear() - i
              ).map(year => (
                <SelectItem
                  className={'cursor-pointer'}
                  key={year}
                  value={year.toString()}
                >
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="option-month">
          <Select
            value={monthSelected || currentMonth.toString()}
            onValueChange={value => {
              goToDate(
                new Date(
                  parseInt(yearSelected) || currentYear,
                  parseInt(value),
                  1
                )
              )
              setMonthSelected(value)
            }}
          >
            <SelectTrigger
              className={
                'w-[100px] hover:bg-slate-50 focus-visible:bg-slate-50  focus:bg-slate-100 h-7 text-center border-0 shadow-none focus:ring-0'
              }
            >
              <SelectValue placeholder={monthSelected || currentMonth} />
            </SelectTrigger>
            <SelectContent>
              {[...Array(12)].map((_, index) => {
                const month_number = index.toString()
                const month_name = new Intl.DateTimeFormat('id-ID', {
                  month: 'long',
                }).format(new Date(2022, index))
                return (
                  <SelectItem key={month_name} value={month_number}>
                    {month_name}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button
        size={'sm'}
        variant={'outline'}
        className={'px-2 shadow-none border-none'}
      >
        <IconChevronRight size={16} />
      </Button>
    </div>
  )
}

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  function DateInput(props, ref) {
    const [date, setDate] = React.useState<Date>()
    const [year, setYear] = useState<string | undefined>(
      moment().format('YYYY')
    )
    const [open, setOpen] = useState(false)
    const { onChange } = props

    useEffect(() => {
      if (props.value) {
        setDate(new Date(props.value))
      }
    }, [])

    return (
      <div className={'grid w-full gap-1.5'}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-auto justify-between text-left font-normal',
                !date && 'text-muted-foreground',
                props.errors
                  ? 'transition ease-in-out duration-200 border border-rose-500 focus:ring-rose-200 focus-visible:ring focus-visible:ring-rose-200 focus-visible:outline focus-visible:outline-rose-200 focus-visible:border focus-visible:border-rose-500'
                  : ''
              )}
            >
              {date ? (
                format(date, 'dd, LLLL yyyy', { locale: id })
              ) : (
                <span>{date || props.placeholder}</span>
              )}
              <CalendarIcon className="mr-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-4">
            <Calendar
              className={'p-0 w-auto'}
              mode="single"
              selected={date}
              onSelect={e => {
                setDate(e)
                setOpen(!open)
                onChange(e)
              }}
              initialFocus
              components={{
                Caption: CustomCaption,
              }}
              locale={id}
              styles={{
                head_cell: {
                  width: '40px',
                },
                cell: {
                  width: '40px',
                },
              }}
              showOutsideDays
            />
          </PopoverContent>
        </Popover>
        {props.errors && (
          <div className="text-rose-500 text-xs font-normal">
            {props.errors}
          </div>
        )}
      </div>
    )
  }
)

export default DateInput
