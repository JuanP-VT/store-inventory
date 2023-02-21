import React from "react";
import { useState } from "react";
import CategoryCardView from "./CategoryCardView";
import CategoryCardEdit from "./CategoryCardEdit";

//This component displays each category in a card, it also switches to edit mode
function CategoryCard() {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      {editMode === false ? (
        <CategoryCardView setEditMode={setEditMode} />
      ) : (
        <CategoryCardEdit setEditMode={setEditMode} />
      )}
    </>
  );
}

export default CategoryCard;
