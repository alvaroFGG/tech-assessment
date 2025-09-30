import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo } from 'react';

type Props<T> = {
  data: T[] | null;
  fields: (keyof T)[];
  widths?: string[];
};

const widthMapping: { [key: string]: string } = {
  '1': '8.33%',
  '2': '16.66%',
  '3': '25%',
  '4': '33.33%',
  '5': '41.66%',
  '6': '50%',
  '7': '58.33%',
  '8': '66.66%',
  '9': '75%',
  '10': '83.33%',
  '11': '91.66%',
  '12': '100%',
};

export const DynamicTable = <T extends object>({
  data,
  fields,
  widths,
}: Props<T>) => {
  const columns = useMemo<ColumnDef<T>[]>(() => {
    if (!data || data.length === 0) return [];

    return fields.map((key) => ({
      accessorKey: key,
      header: String(key).charAt(0).toUpperCase() + String(key).slice(1),
    })) as ColumnDef<T>[];
  }, [data, fields]);

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const getWidthStyle = (index: number) => {
    if (!widths || widths.length <= index) return {};
    const width = widths[index];
    return {
      width: widthMapping[width] || 'auto',
    };
  };

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header, index) => (
              <th key={header.id} style={getWidthStyle(index)}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell, index) => (
              <td key={cell.id} style={getWidthStyle(index)}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
