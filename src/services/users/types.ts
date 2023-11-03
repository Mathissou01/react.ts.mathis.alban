export type InputUser = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
};

export type InputPost = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  likes: number;
};
