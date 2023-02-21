import React from "react";
import { useState } from "react";
import { Category } from "../../../interfaces";
import ProductCardEdit from "./ProductCardEdit";
import ProductCardView from "./ProductCardView";
type Props = {
  name: string;
  category?: string;
  categoryIconUrl: string;
  stock: number;
  price: number;
  categoryList: Category[];
  _id: string;
  setUpdateComponent: React.Dispatch<React.SetStateAction<number>>;
};

function ProductCard({
  name,
  category,
  categoryIconUrl,
  price,
  stock,
  categoryList,
  _id,
  setUpdateComponent,
}: Props) {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      {editMode === false ? (
        <ProductCardView
          setEditMode={setEditMode}
          name={name}
          category={category}
          categoryIconUrl={categoryIconUrl}
          stock={stock}
          price={price}
        />
      ) : (
        <ProductCardEdit
          setEditMode={setEditMode}
          name={name}
          category={category}
          categoryIconUrl={categoryIconUrl}
          stock={stock}
          price={price}
          categoryList={categoryList}
          _id={_id}
          setUpdateComponent={setUpdateComponent}
        />
      )}
    </>
  );
}

export default ProductCard;
