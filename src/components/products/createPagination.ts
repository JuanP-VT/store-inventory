import { modProduct, Product } from "../../interfaces";

// This function splits an array into smaller arrays of the same size
export default function createPagination(
  arrayOfItems: modProduct[],
  itemsPerPage: number
) {
  const paginatedArray = [];
  while (arrayOfItems.length > 0) {
    const newEntry = arrayOfItems.splice(0, itemsPerPage);
    paginatedArray.push(newEntry);
  }
  return paginatedArray;
}
