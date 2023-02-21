import React, { useState } from "react";
import NewProductForm from "../forms/NewProductForm";

// This component creates a new product from the form
function AddProduct() {
  //New Product
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState<null | number>(0);
  const [price, setPrice] = useState<null | number>(0);
  const [minStock, setMinStock] = useState<null | number>(null);
  const [maxStock, setMaxStock] = useState<null | number>(null);
  const newProduct = {
    name: name,
    category: category,
    stock: stock,
    price: price,
    minStock: minStock,
    maxStock: maxStock,
  };

  return (
    <NewProductForm
      setName={setName}
      setCategory={setCategory}
      setStock={setStock}
      setPrice={setPrice}
      setMinStock={setMinStock}
      setMaxStock={setMaxStock}
      minStock={minStock}
      maxStock={maxStock}
      newProduct={newProduct}
    />
  );
}

export default AddProduct;
