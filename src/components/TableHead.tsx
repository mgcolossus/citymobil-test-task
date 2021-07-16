import React from "react";
import { SortDirection } from "../types/tableData";
import { ColumnTitle } from "./ColumnTitle";

interface Props {
  columnNames: string[];
  sortedColumnName: null | string;
  sortDirection: null | SortDirection;
  columnTitleClickCallback: (columnName: string) => void;
}

export const TableHead = ({ columnNames, sortedColumnName, sortDirection, columnTitleClickCallback }: Props) => {
  return (
    <thead>
      <tr>
        {columnNames.map((columnName) => (
          <ColumnTitle
            key={columnName}
            columnName={columnName}
            sortedColumnName={sortedColumnName}
            sortDirection={sortDirection}
            columnTitleClickCallback={columnTitleClickCallback}
          />
        ))}
      </tr>
    </thead>
  );
};
