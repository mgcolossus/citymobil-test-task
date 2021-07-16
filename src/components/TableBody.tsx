import React from "react";
import { SelectedCar } from "../types/tableData";

interface Props {
  rowsData: any;
  columnNames: string[];
  onTableCellClick: (value: null | SelectedCar) => void;
}

export const TableBody = ({ rowsData, columnNames, onTableCellClick }: Props) => {
  function createRowFromData(rowData: any, index: number) {
    const tableRow = columnNames.map((columnName, i: number) => {
      function clickHandler() {
        if (i === 0 || !rowData[columnName]) {
          onTableCellClick(null);
        } else {
          onTableCellClick({ model: rowData["Марка и модель"], year: rowData[columnName] });
        }
      }

      if (i === 0 || rowData[columnName]) {
        return (
          <th key={i} onClick={clickHandler}>
            {rowData[columnName]}
          </th>
        );
      } else {
        return (
          <th key={i} onClick={clickHandler}>
            -
          </th>
        );
      }
    });
    return <tr key={index}>{tableRow}</tr>;
  }
  return <tbody>{rowsData.map(createRowFromData)}</tbody>;
};
