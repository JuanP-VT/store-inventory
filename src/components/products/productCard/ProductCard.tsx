import React from "react";
import { useState } from "react";
import ProductCardEdit from "./ProductCardEdit";
import ProductCardView from "./ProductCardView";
type Props = {
  name: string;
  categorie?: string;
  categorieIconUrl: string;
  stock: number;
  price: number;
};

function ProductCard({
  name,
  categorie,
  categorieIconUrl,
  price,
  stock,
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
        <ProductCardEdit setEditMode={setEditMode} />
      )}
    </>
  );
}

export default ProductCard;
