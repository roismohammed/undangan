import React, {ElementType, forwardRef} from 'react'
import {cn} from '@/lib/utils'
import CurrencyInput from 'react-currency-input-field'

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U
export type CurrencyInputOnChangeValues = {
	float: number | null
	formatted: string
	value: string
}

export type IntlConfig = {
	locale: string
	currency?: string
}

export type CurrencyInputProps = Overwrite<
	React.ComponentPropsWithRef<'input'>,
	{
		allowDecimals?: boolean
		allowNegativeValue?: boolean
		id?: string
		maxLength?: number
		className?: string
		customInput?: ElementType
		decimalsLimit?: number
		decimalScale?: number
		defaultValue?: number | string
		disabled?: boolean
		fixedDecimalLength?: number
		onValueChange?: (
			value: string | undefined,
			name?: string,
			values?: CurrencyInputOnChangeValues
		) => void
		placeholder?: string
		prefix?: string
		suffix?: string
		step?: number
		decimalSeparator?: string
		groupSeparator?: string
		disableGroupSeparators?: boolean
		disableAbbreviations?: boolean
		intlConfig?: IntlConfig
		transformRawValue?: (rawValue: string) => string
		formatValueOnBlur?: boolean
		label?: string
		name: string
		errors?: string
		help?: string
		icon?: React.ReactNode
		iconPosition?: 'start' | 'end'
		required?: boolean
		type?: 'password' | 'text' | 'email' | 'number' | 'currency' | any
		isFocused?: boolean
		value?: any
		onChange?: (value: string | any) => void
	}
>

const CurrencyInputComp = forwardRef<HTMLInputElement, CurrencyInputProps>(
	function CurrencyInputComp(props, ref) {
		const {
			      label,
			      name,
			      errors,
			      placeholder,
			      help,
			      icon,
			      className,
			      type         = 'text',
			      iconPosition = 'start',
			      onChange,
			      ...otherProps
		      } = props

		if (icon && iconPosition === 'start') {
			return (
				<div className="grid w-full items-center gap-1.5">
					<div className="inner-input flex gap-2 items-center relative">
                        <span className="input-icon bg-slate-50 border min-h-[80%] border-slate-100 w-auto flex items-center px-2 m-1 rounded-sm absolute">
                            {icon}
                        </span>
						<CurrencyInput
							id={name}
							name={name}
							placeholder={placeholder}
							defaultValue={0}
							decimalsLimit={2}
							onValueChange={(value, name, values) =>
								console.log(value, name, values)
							}
							className={cn(
								'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-nonedisabled:opacity-50 ps-12 ease-in-out duration-200 focus-visible:ring focus-visible:ring-primary/20 focus-visible:outline focus-visible:outline-primary/20 focus-visible:border focus-visible:border-primary/50 disabled:cursor-not-allowed',
								errors
									? 'border-rose-400 focus-visible:ring-1 focus-visible:ring-rose-500'
									: ''
							)}
						/>
					</div>
					{errors && (
						<div className="text-rose-500 text-xs font-normal">
							{errors}
						</div>
					)}
				</div>
			)
		} else if (icon && iconPosition === 'end') {
			return (
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<div className="inner-input flex gap-2 items-center relative">
						<CurrencyInput
							id={name}
							name={name}
							placeholder={placeholder}
							defaultValue={0}
							decimalsLimit={2}
							onValueChange={(value, name, values) =>
								console.log(value, name, values)
							}
							className={cn(
								'flex h-9 w-full rounded-md border-input bg-transparent px-3 py-1 text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  focus-visible:ring-ring disabled:opacity-50 ps-12 transition ease-in-out duration-200 border focus-visible:ring focus-visible:ring-slate-200 focus-visible:outline focus-visible:outline-slate-200 focus-visible:border focus-visible:border-primary disabled:cursor-not-allowed ',
								errors
									? 'border-rose-400 focus-visible:ring-1 focus-visible:ring-rose-500'
									: ''
							)}
						/>
						<span className="input-icon bg-slate-50 border min-h-[80%] border-slate-100 w-auto flex items-center px-1 m-1 right-0 rounded-sm absolute">
                            {icon}
                        </span>
					</div>
					{errors && (
						<div className="text-rose-500 text-xs font-normal">
							{errors}
						</div>
					)}
				</div>
			)
		} else {
			return (
				<div className="grid w-full items-center gap-1.5">
					<CurrencyInput
						id={name}
						name={name}
						placeholder={placeholder}
						fixedDecimalLength={0}
						decimalsLimit={0}
						decimalSeparator={'.'}
						groupSeparator={','}
						onValueChange={(value, name, values) =>
							onChange ? onChange(value) : undefined
						}
						className={cn(
							'focus-visible:ring-ring disabled:opacity-50 flex h-9 w-full rounded-md border-input bg-transparent px-3 py-1 text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ringdisabled:opacity-50 transition ease-in-out duration-200 border focus-visible:ring focus-visible:ring-slate-200 focus-visible:outline focus-visible:outline-slate-200 focus-visible:border focus-visible:border-primary disabled:cursor-not-allowed',
							errors
								? 'transition ease-in-out duration-200 border border-rose-500 focus-visible:ring focus-visible:ring-rose-200 focus-visible:outline focus-visible:outline-rose-200 focus-visible:border focus-visible:border-rose-500'
								: ''
						)}
						intlConfig={{locale: 'id-ID', currency: 'IDR'}}
						{...otherProps}
					/>
					{errors && (
						<div className="text-rose-500 text-xs font-normal">
							{errors}
						</div>
					)}
				</div>
			)
		}
	}
)

CurrencyInputComp.displayName = 'CurrencyInput'

export default CurrencyInputComp
