import { useState } from "react";
import InputComponent from "../components/Input";
import { createFakePost } from "../services/createFakePost";
import ListItemPosts from "../components/ListPost";
import styled from "@emotion/styled";
import { usePosts } from "../services/users/usePosts";

function PostsPage() {
  const { posts, loading, setPosts, deletePosts } = usePosts();
  const [searchFilter, setSearchFilter] = useState("");

  const createPost = () => {
    const newPosts = createFakePost(1);
    setPosts([...posts, ...newPosts]);
  };
  console.log("post", posts);
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
                onClick={() => deletePosts(id)}
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
