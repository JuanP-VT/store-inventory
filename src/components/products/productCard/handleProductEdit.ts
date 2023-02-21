// Grabs the information from the form and send an edit request to the API
export default async function handleProductEdit(
  editedProduct: {
    name: string;
    category: string;
    price: number;
    stock: number;
  },
  e: React.MouseEvent,
  setUpdateComponent: React.Dispatch<React.SetStateAction<number>>,
  setFeedback: React.Dispatch<React.SetStateAction<boolean>>,
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
) {
  e.preventDefault();

  const res = await fetch("https://wild-waterfall-1243.fly.dev/products", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(editedProduct),
  });
  const { msg } = await res.json();
  // If update is successful show feedback and disable edit mode
  if (msg === "Success") {
    setUpdateComponent((state) => state + 1);
    setFeedback(true);
    setTimeout(() => {
      setFeedback(false);
      setEdit(false);
    }, 3000);
  }
}
