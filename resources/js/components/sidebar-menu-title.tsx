import React from 'react'

type SidebarMenuTitleProps = {
  text: string
}

const SidebarMenuTitle: React.FC<SidebarMenuTitleProps> = ({ text }) => {
  return (
    <div>
      <h5
        className={'mt-[20px] mb-[10px] capitalize font-normal text-slate-500'}
      >
        {text}
      </h5>
    </div>
  )
}

export default SidebarMenuTitle
