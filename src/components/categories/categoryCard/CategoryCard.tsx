import { useState } from "react";
import CategoryCardView from "./CategoryCardView";
import CategoryCardEdit from "./CategoryCardEdit";
type Props = {};

//This component displays each category in a card, it also switches to edit mode
function CategoryCard({}: Props) {
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
