import { TableDataAction, TableDataActionTypes } from "../../types/tableData";
import { Dispatch } from "redux";

export const fetchTableData = () => {
  return async (dispatch: Dispatch<TableDataAction>) => {
    try {
      dispatch({ type: TableDataActionTypes.FETCH_TABLE_DATA });
      const response = await fetch("https://city-mobil.ru/api/cars");
      const fetchedData = await response.json();
      const columnNames = ["Марка и модель", ...fetchedData.tariffs_list];
      const rowsData = fetchedData.cars.map((carData: any) => {
        const currentRowData: any = {};
        columnNames.forEach((columnName) => {
          if (columnName === "Марка и модель") {
            currentRowData[columnName] = `${carData.mark} ${carData.model}`;
          } else if (carData.tariffs[columnName]) {
            currentRowData[columnName] = carData.tariffs[columnName].year;
          } else {
            currentRowData[columnName] = null;
          }
        });
        return currentRowData;
      });
      dispatch({
        type: TableDataActionTypes.FETCH_TABLE_DATA_SUCCESS,
        payload: {
          rowsData,
          columnNames,
        },
      });
    } catch (error) {
      dispatch({ type: TableDataActionTypes.FETCH_TABLE_DATA_ERROR, payload: "Произошла ошибка при загрузке данных" });
    }
  };
};

export const sortTable = (columnName: string): TableDataAction => ({
  type: TableDataActionTypes.SORT_TABLE,
  payload: { columnName },
});

export const filterTable = (substring: string): TableDataAction => ({
  type: TableDataActionTypes.FILTER_TABLE,
  payload: {
    substring,
  },
});
