import { useEffect, useState } from "react";
import InputComponent from "../components/Input";
import { createFakePost } from "../services/createFakePost";
import ListItemPosts from "../components/ListPost";
import styled from "@emotion/styled";
import { Post } from "../models/Post";

function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const newPosts = createFakePost(10);
      setPosts(newPosts);
      setLoading(false);
    }, 750);
  }, []);

  const createPost = () => {
    const newPosts = createFakePost(1);
    setPosts([...posts, ...newPosts]);
  };

  const deletePost = (id: number) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  return (
    <div className="c-PostsPage">
      <Button isDisabled={false} onClick={createPost}>
        Create Posts
      </Button>
      <InputComponent
        onChange={(event) => setSearchFilter(event.target.value)}
        placeholder="Search..."
      />

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ListContainer>
          {posts
            .filter((post) => post.title.match(new RegExp(searchFilter, "ig")))
            .map(({ id, title, description, image, date, likes }) => (
              <ListItemPosts
                key={id}
                title={title}
                description={description}
                image={image}
                date={date}
                likes={likes}
                onClick={() => deletePost(id)}
              />
            ))}
        </ListContainer>
      )}
    </div>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Button = styled.button<{ isDisabled: boolean }>`
  background-color: red;
  outline: inherit;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  user-select: ${({ isDisabled }) => (isDisabled ? "none" : "initial")};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  border-radius: 0.5rem;

  &:hover {
    background-color: ${({ isDisabled }) => (isDisabled ? "" : "blue")};
  }
`;

export default PostsPage;
