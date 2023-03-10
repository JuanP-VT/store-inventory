export default async function handleOnSubmitProduct(
  e: React.FormEvent,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setValidated: React.Dispatch<React.SetStateAction<boolean>>,
  newProduct: {
    name: string;
    category: string;
    stock: number | null;
    price: number | null;
    minStock: number | null;
    maxStock: number | null;
  }
) {
  e.preventDefault();
  setValidated(true);
  // Pre request validation
  if (newProduct.name === "") {
    setMessage("Enter Product Name");
    return;
  }

  if (newProduct.minStock !== null && newProduct.maxStock !== null) {
    if (newProduct.minStock > newProduct.maxStock) {
      setMessage("Minimum limit must be lower than maximum");
      return;
    }
  }

  //Api call
  const res = await fetch("https://wild-waterfall-1243.fly.dev/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newProduct),
  });
  const { msg } = await res.json();
  //Post request Validation
  const nameInput = document.querySelector("#productName") as HTMLInputElement;
  if (msg === "Name is already in database") {
    nameInput.setCustomValidity("Invalid field");
  }
  if (msg === "Success" && msg !== "Name is already in database") {
    nameInput.setCustomValidity("");
  }

  setMessage(msg);
}
