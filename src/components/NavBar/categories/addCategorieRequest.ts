/*This function makes a request to post a new categorie to the database,
it validates the request and returns feedback to the user
*/

async function addCategorieRequest(
  e: React.FormEvent,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setValidated: React.Dispatch<React.SetStateAction<boolean>>
) {
  e.preventDefault();
  const nameInput = document.querySelector(
    "#categorieName"
  ) as HTMLInputElement;
  const categorieName = nameInput.value.toLowerCase();
  const urlInput = document.querySelector("#iconUrl") as HTMLInputElement;
  const iconUrl = urlInput.value.toLocaleLowerCase();
  const newEntry = { name: categorieName, iconUrl: iconUrl };
  setValidated(true);
  // Prerequest validation
  if (categorieName === "") {
    setMessage("Enter Categorie Name");
    return;
  }
  if (iconUrl === "") {
    setMessage("Enter Icon Url");
    return;
  }
  const res = await fetch("https://wild-waterfall-1243.fly.dev/categories", {
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

export default addCategorieRequest;
