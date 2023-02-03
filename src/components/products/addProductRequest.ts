import { Product } from "../../interfaces";

export default async function addProductRequest(
  e: React.FormEvent,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setValidated: React.Dispatch<React.SetStateAction<boolean>>
) {
  e.preventDefault();
  // Create new entry with form values
  const nameInput = document.querySelector("#productName") as HTMLInputElement;
  const productName = nameInput.value;
  const categorieInput = document.querySelector(
    "#productCategorie"
  ) as HTMLOptionElement;
  const productCategorie = categorieInput.value;
  const stockInput = document.querySelector(
    "#productStock"
  ) as HTMLInputElement;
  const stock = stockInput.value;
  const priceInput = document.querySelector(
    "#productPrice"
  ) as HTMLInputElement;
  const price = priceInput.value;
  const newEntry = {
    name: productName.toLowerCase(),
    categorie: productCategorie.toLowerCase(),
    stock: parseInt(stock),
    price: parseInt(price),
  } as Product;
  setValidated(true);
  // Prerequest validation
  if (productName === "") {
    setMessage("Enter Product Name");
    return;
  }
  if (stock === "") {
    setMessage("Enter Current Stock");
    return;
  }
  if (price === "") {
    setMessage("Enter Price");
    return;
  }
  //Api call
  const res = await fetch("https://wild-waterfall-1243.fly.dev/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newEntry),
  });
  const { msg } = await res.json();
  //Postrequest Validation
  if (msg === "Name is already in database") {
    nameInput.setCustomValidity("Invalid field");
  }
  if (msg === "Success" && msg !== "Name is already in database") {
    nameInput.setCustomValidity("");
  }
  setMessage(msg);
}
