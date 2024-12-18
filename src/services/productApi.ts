import { Product } from "../types";

export async function getProducts() : Promise<{products: Product[]}> {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
}