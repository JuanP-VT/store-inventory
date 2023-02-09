import React from "react";
import { useState } from "react";
import { Categorie } from "../../../interfaces";
import ProductCardEdit from "./ProductCardEdit";
import ProductCardView from "./ProductCardView";
type Props = {
  name: string;
  categorie?: string;
  categorieIconUrl: string;
  stock: number;
  price: number;
  categorieList: Categorie[];
  _id: string;
  setUpdateComponent: React.Dispatch<React.SetStateAction<number>>;
};

function ProductCard({
  name,
  categorie,
  categorieIconUrl,
  price,
  stock,
  categorieList,
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
          categorie={categorie}
          categorieIconUrl={categorieIconUrl}
          stock={stock}
          price={price}
        />
      ) : (
        <ProductCardEdit
          setEditMode={setEditMode}
          name={name}
          categorie={categorie}
          categorieIconUrl={categorieIconUrl}
          stock={stock}
          price={price}
          categorieList={categorieList}
          _id={_id}
          setUpdateComponent={setUpdateComponent}
        />
      )}
    </>
  );
}

export default ProductCard;
