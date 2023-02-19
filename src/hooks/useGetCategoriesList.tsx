import { useState, useEffect } from "react";
import { Category } from "../interfaces";

function useGetCategoriesList() {
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  useEffect(() => {
    callApi();
    async function callApi() {
      const res = await fetch("https://wild-waterfall-1243.fly.dev/categories");
      const data = (await res.json()) as Category[];
      // sort list alphabetically
      data.sort((a, b) => {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      setCategoriesList(data);
    }
  }, []);
  return categoriesList;
}

export default useGetCategoriesList;
