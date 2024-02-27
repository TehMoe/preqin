"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { Investors } from "../types";
import { DataTable } from "./DataTable";

interface InvestorTableProps {
  investors: Investors[];
}

export const InvestorTable: React.FC<InvestorTableProps> = ({ investors }) => {
  const columnHelper = createColumnHelper<Investors>();
  const columns = [
    columnHelper.accessor("firm_id", {
      cell: (info) => info.getValue(),
      header: "Firm ID",
      meta: {
        isNumeric: true,
      },
    }),
    columnHelper.accessor("firm_name", {
      cell: (info) => info.getValue(),
      header: "Firm Name",
    }),
    columnHelper.accessor("firm_type", {
      cell: (info) => info.getValue(),
      header: "Type",
    }),
    columnHelper.accessor("date_added", {
      cell: (info) => info.getValue(),
      header: "Date Added",
    }),
    columnHelper.accessor("address", {
      cell: (info) => info.getValue(),
      header: "Address",
      meta: {
        isNumeric: true,
      },
    }),
  ];

  return <DataTable columns={columns} data={investors} />;
};
