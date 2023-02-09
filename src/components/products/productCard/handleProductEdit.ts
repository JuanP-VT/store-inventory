// Grabs the information from the form and send an edit request to the API
export default async function handleProductEdit(
  e: React.MouseEvent,
  setUpdateComponent: React.Dispatch<React.SetStateAction<number>>
) {
  e.preventDefault();
  const target = e.target as HTMLButtonElement;
  const parentCard = target.parentElement?.parentElement as HTMLDivElement;
  const productName = parentCard.querySelector(
    "#productName"
  ) as HTMLInputElement;
  const productCategorie = parentCard.querySelector(
    "#productCategorie"
  ) as HTMLInputElement;
  const productStock = parentCard.querySelector(
    "#productStock"
  ) as HTMLInputElement;
  const productPrice = parentCard.querySelector(
    "#productPrice"
  ) as HTMLInputElement;

  const id = parentCard.getAttribute("data-_id");
  const name = productName.value;
  const categorie = productCategorie.value;
  const Stock = productStock.value;
  const price = productPrice.value;
  const newEntry = {
    _id: id,
    name: name,
    categorie: categorie,
    stock: Stock,
    price: price,
  };
  await fetch("https://wild-waterfall-1243.fly.dev/products", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newEntry),
  });
  setUpdateComponent((state) => state + 1);
}
