import { InputPost, InputUser } from "./types";
import { faker } from "@faker-js/faker";

export const transformedUser = ({
  id,
  firstName,
  lastName,
  image,
}: InputUser) => ({
  id,
  name: `${firstName} ${lastName}`,
  avatar: image,
});

export const transformedPost = ({
  id,
  title,
  description,
  image,
  date,
  likes,
}: InputPost) => ({
  id,
  title: title,
  description: description,
  image: faker.image.image(),
  date: new Date(faker.date.recent()).toLocaleDateString("fr-FR"),
  likes: faker.datatype.number(),
});
