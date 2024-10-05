import { ColumnDef, Table } from '@tanstack/react-table';

export type DatatableProps<TData, TValue> = {
  data: object | any;
  columns: ColumnDef<TData, TValue>[] | any;
};
