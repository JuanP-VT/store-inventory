import React, { useState } from "react";
import BPagination from "react-bootstrap/Pagination";
import { Product } from "../../interfaces";
type Props = {
  setCurrentPageIndex: React.Dispatch<React.SetStateAction<number>>;
  currentPageIndex: number;
  paginatedProductList: Product[][];
};

function PaginationButtons({
  setCurrentPageIndex,
  currentPageIndex,
  paginatedProductList,
}: Props) {
  return (
    <>
      <BPagination>
        {paginatedProductList.map((page, index) => (
          <BPagination.Item
            key={`i${index}`}
            active={index === currentPageIndex}
            onClick={() => setCurrentPageIndex(index)}
          >
            {index + 1}
          </BPagination.Item>
        ))}
      </BPagination>
    </>
  );
}

export default PaginationButtons;
