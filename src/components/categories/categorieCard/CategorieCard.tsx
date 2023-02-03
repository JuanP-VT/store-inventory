import { useState } from "react";
import CategorieCardView from "./CategorieCardView";
import CategorieCardEdit from "./CategorieCardEdit";
type Props = {};

//This component displays each categorie in a card, it also switches to edit mode
function CategorieCard({}: Props) {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      {editMode === false ? (
        <CategorieCardView setEditMode={setEditMode} />
      ) : (
        <CategorieCardEdit setEditMode={setEditMode} />
      )}
    </>
  );
}

export default CategorieCard;
