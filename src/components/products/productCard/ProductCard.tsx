import React from "react";
import { useState } from "react";
import ProductCardEdit from "./ProductCardEdit";
import ProductCardView from "./ProductCardView";
type Props = {};

function ProductCard({}: Props) {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      {editMode === false ? (
        <ProductCardView setEditMode={setEditMode} />
      ) : (
        <ProductCardEdit setEditMode={setEditMode} />
      )}
    </>
  );
}

export default ProductCard;
