import React from "react";
import { SortDirection } from "../types/tableData";
import { SortArrow } from "./SortArrow";

interface Props {
  columnName: string;
  sortedColumnName: null | string;
  sortDirection: null | SortDirection;
  columnTitleClickCallback: (columnName: string) => void;
}

export const ColumnTitle = ({ columnName, sortedColumnName, sortDirection, columnTitleClickCallback }: Props) => {
  return (
    <th
      key={columnName}
      className={columnName === sortedColumnName && sortDirection ? "sorted" : undefined}
      onClick={() => columnTitleClickCallback(columnName)}>
      {columnName}
      {columnName === sortedColumnName && sortDirection ? <SortArrow sortDirection={sortDirection} /> : null}
    </th>
  );
};
