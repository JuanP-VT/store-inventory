import { Product } from "../../interfaces";

// This function splits an array of items into groups
export default function createPagination(
  arrayOfItems: Product[],
  itemsPerPage: number
) {
  const paginatedArray = [];
  const cloneArray = [...arrayOfItems];
  while (cloneArray.length > 0) {
    const newEntry = cloneArray.splice(0, itemsPerPage);
    paginatedArray.push(newEntry);
  }
  return paginatedArray;
}
