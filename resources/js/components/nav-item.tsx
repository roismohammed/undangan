import { cn } from '@/lib/utils'
import { Link } from '@inertiajs/react'
import { IconHelpCircle } from '@tabler/icons-react'
import React from 'react'

type NavItemProps = {
  icon?: React.ReactNode
  text: string
  url: string
  className?: string
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, url, ...props }) => {
  return (
    <div
      className={cn(
        'py-1.5 my-[1px] px-[10px] group hover:bg-primary hover:text-slate-900 rounded-sm hover:no-underline' +
          ' text-zinc-900',
        props.className
      )}
    >
      <Link
        href={url}
        className={cn(
          'flex items-center group-hover:text-white text-sm group text-zinc-900 font-medium gap-[10px] ',
          props.className
        )}
      >
        <span>{icon ?? <IconHelpCircle size={20} stroke={1.5} />}</span>
        <span>{text}</span>
      </Link>
    </div>
  )
}

export default NavItem
