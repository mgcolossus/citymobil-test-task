import React from "react";
import { SelectedCar } from "./../types/tableData";

interface Props {
  selectedCar: null | SelectedCar;
}

export const SelectedCarBlock = ({ selectedCar }: Props) => {
  return (
    <div className="selected-car-block">
      {selectedCar ? `Выбран автомобиль ${selectedCar.model} ${selectedCar.year} года выпуска` : null}
    </div>
  );
};
