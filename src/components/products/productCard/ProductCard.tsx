import React from "react";
import { useState } from "react";
import { Category, Product } from "../../../interfaces";
import ProductCardEdit from "./ProductCardEdit";
import ProductCardView from "./ProductCardView";
type Props = {
  product: Product;
  categoryList: Category[];
  setUpdateComponent: React.Dispatch<React.SetStateAction<number>>;
};

function ProductCard({ product, categoryList, setUpdateComponent }: Props) {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      {editMode === false ? (
        <ProductCardView setEditMode={setEditMode} product={product} />
      ) : (
        <ProductCardEdit
          setEditMode={setEditMode}
          product={product}
          categoryList={categoryList}
          setUpdateComponent={setUpdateComponent}
        />
      )}
    </>
  );
}

export default ProductCard;
