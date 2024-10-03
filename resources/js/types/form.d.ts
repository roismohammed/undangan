import React, { RefAttributes } from 'react'

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  name: string
  errors?: string
  placeholder?: string
  help?: string
  icon?: React.ReactNode
  className?: string
  iconPosition?: 'start' | 'end'
  required?: boolean
  type?: 'password' | 'text' | 'email'
  isFocused?: boolean
}

export type TextareaInputProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string
    name: string
    errors?: string
    placeholder?: string
    help?: string
    className?: string
    required?: boolean
    isFocused?: boolean
  }

export type SwitchInputProps = RefAttributes<HTMLButtonElement> & {
  label?: string
  name: string
  errors?: string
  placeholder?: string
  help?: string
  className?: string
  required?: boolean
  isFocused?: boolean
  value?: boolean
  checked?: boolean
}

export type SelectInputProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  name: string
  errors?: string
  placeholder?: string
  help?: string
  className?: string
  required?: boolean
  isFocused?: boolean
}

export type CheckboxInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  name: string
  errors?: string
  placeholder?: string
  help?: string
  className?: string
  required?: boolean
}
