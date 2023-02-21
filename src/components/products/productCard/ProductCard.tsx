import React from "react";
import { useState } from "react";
import { Product } from "../../../interfaces";
import ProductCardEdit from "./ProductCardEdit";
import ProductCardView from "./ProductCardView";
type Props = {
  product: Product;
  setUpdateComponent: React.Dispatch<React.SetStateAction<number>>;
};

function ProductCard({ product, setUpdateComponent }: Props) {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      {editMode === false ? (
        <ProductCardView setEditMode={setEditMode} product={product} />
      ) : (
        <ProductCardEdit
          setEditMode={setEditMode}
          product={product}
          setUpdateComponent={setUpdateComponent}
        />
      )}
    </>
  );
}

export default ProductCard;
