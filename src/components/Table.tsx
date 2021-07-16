import React from "react";
import { SortDirection, SelectedCar } from "../types/tableData";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

interface Props {
  rowsData: any;
  columnNames: string[];
  sortedColumnName: null | string;
  sortDirection: null | SortDirection;
  columnTitleClickCallback: (columnName: string) => void;
  onTableCellClick: (value: null | SelectedCar) => void;
}

export const Table = ({
  rowsData,
  columnNames,
  sortedColumnName,
  sortDirection,
  columnTitleClickCallback,
  onTableCellClick,
}: Props) => {
  return (
    <div className="table-wrapper">
      <table>
        <TableHead
          columnNames={columnNames}
          sortedColumnName={sortedColumnName}
          sortDirection={sortDirection}
          columnTitleClickCallback={columnTitleClickCallback}
        />
        <TableBody rowsData={rowsData} columnNames={columnNames} onTableCellClick={onTableCellClick} />
      </table>
    </div>
  );
};
