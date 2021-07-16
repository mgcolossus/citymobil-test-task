import React from "react";

interface Props {
  inputValue: string;
  onInputValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterButtonClick: () => void;
}

export const FilterTableBlock = ({ inputValue, onInputValueChange, onFilterButtonClick }: Props) => {
  return (
    <div className="table-filter">
      <div className="table-filter-input-wrapper">
        <input
          className="table-filter-input"
          type="text"
          placeholder="Поиск"
          value={inputValue}
          onChange={onInputValueChange}
        />
      </div>
      <button className="table-filter-button" onClick={onFilterButtonClick}>
        Найти
      </button>
    </div>
  );
};
