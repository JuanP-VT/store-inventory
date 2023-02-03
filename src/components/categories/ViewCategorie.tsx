import React from "react";
import { useEffect, useState } from "react";
import { Categorie } from "../../interfaces";
import CategorieCard from "./categorieCard/CategorieCard";
type Props = {};
// This component will call the API to fetch and display all categories and display
function ViewCategorie({}: Props) {
  //Fetch categorie list and save in state
  const [categorieList, setCategorieList] = useState<Categorie[]>([]);
  useEffect(() => {
    callApi();
    async function callApi() {
      const res = await fetch("https://wild-waterfall-1243.fly.dev/categories");
      const data = await res.json();
      setCategorieList(data);
    }
  }, []);
  return (
    <div>
      <CategorieCard />
    </div>
  );
}

export default ViewCategorie;
