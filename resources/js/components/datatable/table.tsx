import {
  flexRender,
  getCoreRowModel,
  RowData,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'
import { Fragment, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { DatatableProps } from '@/types/datatable'
import TableFooter from '@/components/datatable/footer'
import TableToolbar from '@/components/datatable/toolbar'
import NoDataIllustration from '../../../assets/img/no-data.svg'

declare module '@tanstack/table-core' {
  interface ColumnMeta<TData extends RowData, TValue> {
    align?: 'left' | 'right' | 'center'
  }
}
const Datatable = <TData, TValue>({
  data,
  columns,
}: DatatableProps<TData, TValue>) => {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data: data.data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: { columnVisibility, rowSelection },
  })

  return (
    <Fragment>
      <div className="mb-4 w-full">
        <TableToolbar table={table} />
      </div>
      <div className="table-wrapper overflow-hidden rounded-md border-slate-200 border">
        <Table>
          <TableHeader className={'bg-[#F3F4F6]'}>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead
                    className={cn(
                      'text-slate-900 font-medium',
                      header.column.columnDef.header == 'Aksi'
                        ? 'text-right'
                        : '',
                      `text-${header.column.columnDef.meta?.align}`
                    )}
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        cell.column.columnDef.header == 'Aksi'
                          ? 'text-right'
                          : '',
                        `text-${cell.column.columnDef.meta?.align}`
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className={'bg-white hover:bg-white'}>
                <TableCell
                  colSpan={columns.length}
                  className={'text-center py-8'}
                >
                  <img
                    src={NoDataIllustration}
                    className={'h-96 mx-auto'}
                    alt={'No Data'}
                  />
                  <h4 className={'text-3xl font-semibold text-primary/80 mt-5'}>
                    Data tidak ditemukan
                  </h4>
                  <p className="text-base">
                    Silahkan anda tambahkan terlebih dahulu, kemudiah refresh
                    halaman ini kembali.
                  </p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div
          className={
            'py-6 px-4 flex w-full items-center bg-slate-100/20 border-t'
          }
        >
          <TableFooter
            data={data}
            table={table}
            perPage={'10'}
            handleChangePerPage={value => console.log(value)}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Datatable
