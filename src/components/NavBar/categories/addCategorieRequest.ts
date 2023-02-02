async function addCategorieRequest(e: React.FormEvent) {
  e.preventDefault();
  const nameInput = document.querySelector(
    "#categorieName"
  ) as HTMLInputElement;
  const categorieName = nameInput.value;
  const urlInput = document.querySelector("#iconUrl") as HTMLInputElement;
  const iconUrl = urlInput.value;
  const newEntry = { name: categorieName, iconUrl: iconUrl };
  const res = await fetch("https://wild-waterfall-1243.fly.dev/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newEntry),
  });
  const data = await res.json();
}

export default addCategorieRequest;
