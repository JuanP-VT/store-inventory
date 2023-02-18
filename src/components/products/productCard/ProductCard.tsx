import React from "react";
import { useState } from "react";
import { Categorie } from "../../../interfaces";
import ProductCardEdit from "./ProductCardEdit";
import ProductCardView from "./ProductCardView";
type Props = {
  name: string;
  category?: string;
  categoryIconUrl: string;
  stock: number;
  price: number;
  categoryList: Categorie[];
  _id: string;
  setUpdateComponent: React.Dispatch<React.SetStateAction<number>>;
};

function ProductCard({
  name,
  category: categorie,
  categoryIconUrl: categorieIconUrl,
  price,
  stock,
  categoryList: categorieList,
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
          category={categorie}
          categoryIconUrl={categorieIconUrl}
          stock={stock}
          price={price}
        />
      ) : (
        <ProductCardEdit
          setEditMode={setEditMode}
          name={name}
          category={categorie}
          categoryIconUrl={categorieIconUrl}
          stock={stock}
          price={price}
          categoryList={categorieList}
          _id={_id}
          setUpdateComponent={setUpdateComponent}
        />
      )}
    </>
  );
}

export default ProductCard;
