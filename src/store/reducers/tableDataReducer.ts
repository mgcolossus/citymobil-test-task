import { TableDataState, TableDataActionTypes, TableDataAction, SortDirection } from "../../types/tableData";

const initialState: TableDataState = {
  rowsData: [],
  columnNames: [],
  filteredRowsData: [],
  isSwitchedToFilteredData: false,
  isDataLoading: false,
  isLoadingError: null,
  sortDirection: null,
  sortedColumnName: null,
};

const compare = (a: any, b: any) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

const sortTable = (rowsData: any[], columnName: string, sortDirection: SortDirection) => {
  if (sortDirection === SortDirection.ASC && columnName === "Марка и модель") {
    rowsData.sort((a, b) => {
      const aString: string = a[columnName];
      const bString: string = b[columnName];
      return compare(aString, bString);
    });
  }
  if (sortDirection === SortDirection.DESC && columnName === "Марка и модель") {
    rowsData.sort((a, b) => {
      const aString: string = a[columnName];
      const bString: string = b[columnName];
      return compare(bString, aString);
    });
  }
  if (sortDirection === SortDirection.ASC) {
    rowsData.sort((a, b) => compare(a[columnName], b[columnName]));
  } else {
    rowsData.sort((a, b) => compare(b[columnName], a[columnName]));
  }
};

export const tableDataReducer = (state = initialState, action: TableDataAction): TableDataState => {
  switch (action.type) {
    case TableDataActionTypes.FETCH_TABLE_DATA:
      return { ...initialState, isDataLoading: true };
    case TableDataActionTypes.FETCH_TABLE_DATA_SUCCESS:
      return {
        ...initialState,
        isDataLoading: false,
        isLoadingError: null,
        rowsData: action.payload.rowsData,
        columnNames: action.payload.columnNames,
      };
    case TableDataActionTypes.FETCH_TABLE_DATA_ERROR:
      return { ...initialState, isLoadingError: action.payload };
    case TableDataActionTypes.SORT_TABLE: {
      let newSortDirection = SortDirection.ASC;
      if (action.payload.columnName === state.sortedColumnName) {
        if (state.sortDirection === SortDirection.ASC) {
          newSortDirection = SortDirection.DESC;
        } else {
          newSortDirection = SortDirection.ASC;
        }
      }
      if (state.isSwitchedToFilteredData) {
        sortTable(state.filteredRowsData, action.payload.columnName, newSortDirection);
      } else {
        sortTable(state.rowsData, action.payload.columnName, newSortDirection);
      }
      return {
        ...state,
        sortDirection: newSortDirection,
        sortedColumnName: action.payload.columnName,
      };
    }
    case TableDataActionTypes.FILTER_TABLE: {
      const filterSubstring = action.payload.substring;
      if (filterSubstring.length === 0) {
        if (state.sortDirection && state.sortedColumnName) {
          sortTable(state.rowsData, state.sortedColumnName, state.sortDirection);
        }
        return {
          ...state,
          isSwitchedToFilteredData: false,
          filteredRowsData: [],
        };
      } else {
        const filteredRowsData = state.rowsData.filter((rowData) => {
          for (let key of state.columnNames) {
            if (String(rowData[key]).includes(filterSubstring)) {
              return true;
            }
          }
          return false;
        });
        if (state.sortDirection && state.sortedColumnName) {
          sortTable(filteredRowsData, state.sortedColumnName, state.sortDirection);
        }
        return {
          ...state,
          isSwitchedToFilteredData: true,
          filteredRowsData: filteredRowsData,
        };
      }
    }
    default:
      return state;
  }
};
