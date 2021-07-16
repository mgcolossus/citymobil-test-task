import React, { useState, useEffect } from "react";
import { SelectedCar } from "./types/tableData";
import { FilterTableBlock } from "./components/FilterTableBlock";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { Table } from "./components/Table";
import { SelectedCarBlock } from "./components/SelectedCarBlock";
import "./App.scss";
import { Preloader } from "./components/Preloader";
import { ErrorBlock } from "./components/ErrorBlock";

function App() {
  const [filterInputValue, setFilterInputValue] = useState<string>("");
  const [selectedCar, setSelectedCar] = useState<null | SelectedCar>(null);
  const {
    isDataLoading,
    loadingError,
    rowsData,
    columnNames,
    sortedColumnName,
    sortDirection,
    filteredRowsData,
    isSwitchedToFilteredData,
  } = useTypedSelector((state) => state.tableData);
  const { fetchTableData, sortTable, filterTable } = useActions();

  const onFilterInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInputValue(e.target.value);
  };

  const onFilterButtonClick = () => {
    filterTable(filterInputValue);
  };

  const columnTitleClickCallback = (columnName: string) => {
    sortTable(columnName);
  };

  const changeSelectedCar = (value: null | SelectedCar) => {
    setSelectedCar(value);
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <>
      {isDataLoading ? (
        <Preloader />
      ) : loadingError ? (
        <ErrorBlock errorMessage={loadingError} />
      ) : (
        <div className="app-wrapper">
          <div className="header">header</div>
          <div className="main-content-wrapper">
            <div className="sidebar">sidebar</div>
            <div className="table-block-wrapper">
              <FilterTableBlock
                inputValue={filterInputValue}
                onInputValueChange={onFilterInputValueChange}
                onFilterButtonClick={onFilterButtonClick}
              />
              <Table
                rowsData={isSwitchedToFilteredData ? filteredRowsData : rowsData}
                columnNames={columnNames}
                sortedColumnName={sortedColumnName}
                sortDirection={sortDirection}
                columnTitleClickCallback={columnTitleClickCallback}
                onTableCellClick={changeSelectedCar}
              />
              <SelectedCarBlock selectedCar={selectedCar} />
            </div>
          </div>
          <div className="footer">footer</div>
        </div>
      )}
    </>
  );
}

export default App;
