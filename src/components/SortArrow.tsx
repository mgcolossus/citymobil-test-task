import arrowUp from "../assets/arrow-up.svg";
import arrowDown from "../assets/arrow-down.svg";
import { SortDirection } from "../types/tableData";
import React from "react";

interface Props {
  sortDirection: SortDirection;
}

export const SortArrow = ({ sortDirection }: Props) => {
  if (sortDirection === "asc") {
    return <img src={arrowDown} alt="asc" />;
  } else {
    return <img src={arrowUp} alt="desc" />;
  }
};
