import React, { useState } from "react";
import BPagination from "react-bootstrap/Pagination";
type Props = {
  setCurrentPageIndex: React.Dispatch<React.SetStateAction<number>>;
  currentPageIndex: number;
};

function Pagination({}: Props) {
  const [active, setActive] = useState(1);
  return <div>Pagination</div>;
}

export default Pagination;
