import React, { useState } from 'react'
import TextInput from '@/components/form/text-input'
import { IconSearch, IconTableOptions } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Table } from '@tanstack/react-table'

interface TableToolbarProps<TData, TValue> {
  table: Table<TData>
}

export default function TableToolbar<TData, TValue>({
  table,
}: TableToolbarProps<TData, TValue>) {
  return (
    <div className={'flex items-center justify-between gap-2 px-0'}>
      <div className="right-section flex items-center ">
        <TextInput
          iconPosition={'start'}
          icon={
            <IconSearch size={16} stroke={1.5} className={'text-slate-600'} />
          }
          placeholder={'Cari...'}
          className={'focus-visible:ring-0 me-2'}
          onChange={e => table.setGlobalFilter(e.target.value)}
          name={'keyword'}
        />
      </div>
      <div className="left-section">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto z-0 w-auto select-none focus-visible:ring-0 gap-1"
            >
              <IconTableOptions size={14} stroke={1.5} />
              <span className={'hidden md:block'}>Kolom</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={'p-0 rounded-md w-auto shadow-sm border-slate-100'}
            align="end"
          >
            <div className="dropdown-header p-3 border-b border-slate-100">
              <h5 className={'text-sm font-medium px-2 capitalize'}>
                Pilih Untuk Ditampilkan
              </h5>
            </div>
            <div className={'p-2'}>
              <DropdownMenuCheckboxItem
                className="capitalize py-1 cursor-pointer"
                checked={table.getIsAllColumnsVisible()}
                onCheckedChange={table.getToggleAllColumnsVisibilityHandler()}
              >
                Pilih semua
              </DropdownMenuCheckboxItem>
              {table
                .getAllColumns()
                .filter(column => column.getCanHide())
                .map(column => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize py-1 cursor-pointer"
                      checked={column.getIsVisible()}
                      onCheckedChange={value =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.columnDef.header?.toString()}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
