import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import { IconHelpCircle } from '@tabler/icons-react'
import React from 'react'
import { Link } from '@inertiajs/react'

type DropdownProps = {
  children: React.ReactNode
  text: string
  icon?: React.ReactNode
  target: string
  className?: string
}

type DropdownContentProps = {
  text: string
  url: string
}

const DropdownItem: React.FC<DropdownProps> = ({
  text,
  target,
  icon,
  children,
  ...props
}) => {
  return (
    <div>
      <AccordionItem className={'border-transparent '} value={target}>
        <AccordionTrigger
          className={cn(
            'py-1.5 px-[10px] text-zinc-900 rounded-md hover:no-underline hover:bg-primary group',
            props.className
          )}
        >
          <div className="menu-wrpaper group-hover:text-white font-medium text-sm flex gap-[10px] justify-start items-center">
            {icon ?? <IconHelpCircle size={18} stroke={1.5} />}
            <span>{text}</span>
          </div>
        </AccordionTrigger>
        {children}
      </AccordionItem>
    </div>
  )
}

const DropdownContent: React.FC<DropdownContentProps> = ({ text, url }) => {
  return (
    <AccordionContent
      className={'ms-6 ps-3.5 py-1 border-s-2 border-s-slate-200 '}
    >
      <Link href={url} className={'text-zinc-900 text-sm font-medium'}>
        {text}
      </Link>
    </AccordionContent>
  )
}

export default Object.assign(DropdownItem, {
  Content: DropdownContent,
})
