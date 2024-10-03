import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from '@tabler/icons-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React, { Fragment } from 'react'
import { Table } from '@tanstack/react-table'
import { DatatableProps } from '@/types/datatable'
import { inflate } from 'node:zlib'

interface TableFooterProps<TData, TValue> {
  table: Table<TData>
  data: any
  perPage?: string
  handleChangePerPage: (value: string) => void | ''
}
export default function TableFooter<TData, TValue>({
  table,
  data,
  perPage,
  handleChangePerPage,
}: TableFooterProps<TData, TValue>) {
  return (
    <>
      {data.meta && (
        <Fragment>
          <div className="grid md:flex md:w-full items-center justify-between gap-2">
            <div className="left-section flex-1 flex items-center gap-2">
              <button
                className="border border-light-subtle bg-white rounded p-1"
                onClick={() => table.setPageIndex(0)}
                disabled={table.getState().pagination.pageIndex < 2}
              >
                {<IconChevronsLeft size={16} />}
              </button>
              <button
                className="border border-light-subtle bg-white rounded p-1"
                onClick={() => table.previousPage()}
                disabled={table.getState().pagination.pageIndex < 2}
              >
                {<IconChevronLeft size={16} />}
              </button>
              <button
                className="border border-light-subtle bg-white rounded p-1"
                onClick={() =>
                  table.setPageIndex(
                    table.getState().pagination.pageIndex == 0
                      ? table.getState().pagination.pageIndex + 2
                      : table.getState().pagination.pageIndex + 1
                  )
                }
                disabled={data.meta.current_page === data.meta.last_page}
              >
                {<IconChevronRight size={16} />}
              </button>
              <button
                className="border border-light-subtle bg-white rounded p-1"
                onClick={() => table.setPageIndex(data.meta.last_page)}
                disabled={data.meta.current_page === data.meta.last_page}
              >
                {<IconChevronsRight size={16} />}
              </button>
              <div className="hidden md:flex text-sm font-medium text-slate-800 items-center gap-1">
                <span className={'text-sm font-semibold'}>
                  {table.getState().pagination.pageIndex == 0
                    ? 1
                    : table.getState().pagination.pageIndex}
                </span>
                dari
                <span className={'text-sm font-semibold'}>
                  {data.meta.last_page}
                </span>
                Halaman
              </div>
              <div className="hidden md:inline-flex text-sm font-medium text-slate-800 items-center gap-1">
                <span>| Ke Halaman:</span>
                <div>
                  <Input
                    min={1}
                    max={data.meta.last_page}
                    type="text"
                    defaultValue={table.getState().pagination.pageIndex + 1}
                    onChange={e => {
                      table.setPageIndex(parseFloat(e.target.value))
                    }}
                    className="h-7 w-14 text-center focus-visible:ring-0"
                  />
                </div>
              </div>
            </div>
            <div className="right-section flex gap-3 items-center">
              <div className="page-info text-sm text-slate-700 flex shadow-none gap-1">
                Menampilkan <strong>{data.meta.from}</strong> dari{' '}
                <strong>{data.meta.to}</strong> Data
              </div>
              <div>
                <Select
                  defaultValue={perPage}
                  onValueChange={value => handleChangePerPage(value)}
                >
                  <SelectTrigger className={'w-full h-7 focus-visible:ring-0'}>
                    <SelectValue placeholder={'Set Perpage'}></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {['10', '15', '25', '50', '100', '200', '500'].map(
                      pageSize => (
                        <SelectItem value={pageSize} key={pageSize}>
                          {pageSize} Baris
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </>
  )
}
