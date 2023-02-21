import React from "react";
import { useEffect, useState } from "react";
import { Category } from "../../interfaces";
import CategoryCard from "./categoryCard/CategoryCard";

// This component will call the API to fetch and display all categories and display
function ViewCategory() {
  //Fetch category list and save in state
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  useEffect(() => {
    callApi();
    async function callApi() {
      const res = await fetch("https://wild-waterfall-1243.fly.dev/categories");
      const data = await res.json();
      setCategoryList(data);
    }
  }, []);
  return (
    <div>
      <CategoryCard />
    </div>
  );
}

export default ViewCategory;
