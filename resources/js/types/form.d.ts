import React, { RefAttributes } from 'react';
import { CheckboxProps } from '@radix-ui/react-checkbox';

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: string;
  errors?: string;
  placeholder?: string;
  help?: string;
  icon?: React.ReactNode;
  className?: string;
  iconPosition?: 'start' | 'end';
  required?: boolean;
  type?: 'password' | 'text' | 'email' | 'number' | any;
  isFocused?: boolean;
};

export type TextareaInputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  name: string;
  errors?: string;
  placeholder?: string;
  help?: string;
  className?: string;
  required?: boolean;
  isFocused?: boolean;
};

export type SwitchInputProps = RefAttributes<HTMLButtonElement> & {
  label?: string;
  name: string;
  errors?: string;
  placeholder?: string;
  help?: string;
  className?: string;
  required?: boolean;
  isFocused?: boolean;
  value?: boolean;
  checked?: boolean;
};

export type SelectInputProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  name: string;
  errors?: string;
  placeholder?: string;
  help?: string;
  className?: string;
  required?: boolean;
  isFocused?: boolean;
};

export type CheckboxInputProps = CheckboxProps & {
  label?: string;
  name: string;
  errors?: string;
  placeholder?: string;
  help?: string;
  className?: string;
  required?: boolean;
  isFocused?: boolean;
  value?: boolean;
  ariaLabel?: string;
};

export type DateInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: string;
  errors?: string;
  placeholder?: string;
  help?: string;
  className?: string;
  required?: boolean;
  isFocused?: boolean;
  onChange: (value: string | any) => void;
  value?: string | any;
  type?: 'single' | 'multi' | 'range' | 'none';
};
