import { InputPost, InputUser } from "./types";

export const fetchUsers = async (): Promise<{ users: InputUser[] }> => {
  const data = await fetch("https://dummyjson.com/users");
  const json = await data.json();
  console.log("jason", json);
  return json;
};

export const fetchPosts = async (): Promise<{
  products: InputPost[];
}> => {
  const data = await fetch("https://dummyjson.com/products");
  const json = await data.json();
  console.log("jason", json);
  return json;
};
