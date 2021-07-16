export enum SortDirection {
  ASC = "asc",
  DESC = "desc",
}

export interface TableDataState {
  rowsData: any[];
  columnNames: string[];
  filteredRowsData: any[];
  isSwitchedToFilteredData: boolean;
  isDataLoading: boolean;
  isLoadingError: null | string;
  sortDirection: null | SortDirection;
  sortedColumnName: null | string;
}

export interface SelectedCar {
  model: string;
  year: number;
}

export enum TableDataActionTypes {
  FETCH_TABLE_DATA = "FETCH_TABLE_DATA",
  FETCH_TABLE_DATA_SUCCESS = "FETCH_TABLE_DATA_SUCCESS",
  FETCH_TABLE_DATA_ERROR = "FETCH_TABLE_DATA_ERROR",
  SORT_TABLE = "SORT_TABLE",
  FILTER_TABLE = "FILTER_TABLE",
}

export interface FetchTableDataAction {
  type: TableDataActionTypes.FETCH_TABLE_DATA;
}

export interface FetchTableDataSuccessAction {
  type: TableDataActionTypes.FETCH_TABLE_DATA_SUCCESS;
  payload: {
    rowsData: any[];
    columnNames: string[];
  };
}

export interface FetchTableDataErrorAction {
  type: TableDataActionTypes.FETCH_TABLE_DATA_ERROR;
  payload: string;
}

export interface SortTable {
  type: TableDataActionTypes.SORT_TABLE;
  payload: {
    columnName: string;
  };
}

export interface FilterTable {
  type: TableDataActionTypes.FILTER_TABLE;
  payload: {
    substring: string;
  };
}

export type TableDataAction =
  | FetchTableDataAction
  | FetchTableDataSuccessAction
  | FetchTableDataErrorAction
  | SortTable
  | FilterTable;
