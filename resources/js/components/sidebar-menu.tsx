import { IconAddressBook, IconHome } from '@tabler/icons-react'
import { Accordion } from '@/components/ui/accordion'
import NavItem from '@/components/nav-item'
import { useState } from 'react'
import SidebarMenuTitle from '@/components/sidebar-menu-title'

export default function SidebarMenu() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <Accordion type={'single'} collapsible>
        <SidebarMenuTitle text={'Navigasi'} />
        <NavItem
          text={'Menu 1'}
          url={route('dashboard')}
          icon={
            <IconHome
              stroke={1.25}
              className={'text-slate-800 group-hover:text-white'}
            />
          }
        />
        <NavItem
          text={'Menu 2'}
          url={route('dashboard')}
          icon={
            <IconAddressBook
              stroke={1.25}
              className={'text-slate-800 group-hover:text-white'}
            />
          }
        />
      </Accordion>
    </nav>
  )
}
