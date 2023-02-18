/*This function makes a request to post a new categorie to the database,
it validates the request and returns feedback to the user
*/

import { Category } from "../../interfaces";

async function handleOnSubmitCategory(
  e: React.FormEvent,
  setFeedbackMessage: React.Dispatch<React.SetStateAction<string>>,
  setFormIsValidated: React.Dispatch<React.SetStateAction<boolean>>,
  newCategory: Category
) {
  e.preventDefault();
  const nameInput = document.querySelector("#categoryName") as HTMLInputElement;

  // Prerequest validation
  if (newCategory.name === "") {
    setFeedbackMessage("Enter Category Name");
    return;
  }
  if (newCategory.iconUrl === "") {
    setFeedbackMessage("Enter Icon Url");
    return;
  }
  const res = await fetch("https://wild-waterfall-1243.fly.dev/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newCategory),
  });
  const { msg } = await res.json();
  //Post request Validation
  if (msg === "Name is already in database") {
    nameInput.setCustomValidity("Invalid field");
  }
  if (msg === "Success" && msg !== "Name is already in database") {
    nameInput.setCustomValidity("");
  }
  setFormIsValidated(true);
  setFeedbackMessage(msg);
}

export default handleOnSubmitCategory;
