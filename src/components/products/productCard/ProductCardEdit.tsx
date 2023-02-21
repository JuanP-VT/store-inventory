import React, { useState } from "react";

import { Product } from "../../../interfaces";
import CardEditForm from "../../forms/CardEditForm";
type Props = {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
  setUpdateComponent: React.Dispatch<React.SetStateAction<number>>;
};

function ProductCardEdit({ product, setEditMode, setUpdateComponent }: Props) {
  const [_id] = useState(product._id);
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [stock, setStock] = useState(product.stock);
  const [price, setPrice] = useState(product.price);
  const [minStock, setMinStock] = useState(product.minStock);
  const [maxStock, setMaxStock] = useState(product.maxStock);

  const editedProduct = {
    _id: _id,
    name: name,
    category: category,
    categoryIconUrl: product.categoryIconUrl,
    stock: stock,
    price: price,
    minStock: minStock,
    maxStock: maxStock,
  };

  return (
    <CardEditForm
      setName={setName}
      setCategory={setCategory}
      setStock={setStock}
      setPrice={setPrice}
      setMinStock={setMinStock}
      setMaxStock={setMaxStock}
      product={editedProduct}
      setEditMode={setEditMode}
      setUpdateComponent={setUpdateComponent}
    />
  );
}

export default ProductCardEdit;
