import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productApi";
import { Product } from "../types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

export default function ProductTable() {
  const { isLoading, data: { products = [] } = {} } = useQuery<{
    products: Product[];
  }>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: products,
    columns,
    initialState: {
      sorting: [{ id: "title", desc: false }],
    },
    state: {
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  //render products
  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  <div
                    style={
                      header.column.getCanSort() ? { cursor: "pointer" } : {}
                    }
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        {table.getPageOptions().map((page) => (
          <button onClick={() => table.setPageIndex(page)} key={page}>
            {page + 1}
          </button>
        ))}
        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>{">"}</button>
        <button onClick={() => table.lastPage()} disabled={!table.getCanNextPage()}>{">>"}</button>
      </div>
    </div>
  );
}

const columnHelper = createColumnHelper<Product>();

const columns = [
  columnHelper.accessor("id", {
    header: () => <div>id</div>,
    cell: (info) => <div style={{ color: "gray" }}>{info.getValue()}</div>,
  }),
  columnHelper.accessor("title", {
    header: (table) => (
      <div
        onClick={() =>
          table.column.toggleSorting(table.column.getIsSorted() !== "desc")
        }
      >
        title
      </div>
    ),
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("description", {
    header: "description",
    cell: (info) => info.getValue(),
  }),
];
