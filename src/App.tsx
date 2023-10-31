import "./App.css";
import { Suspense, useState, useEffect } from "react";
import styled from "@emotion/styled";
import Scene from "../src/components/Scene3d/Scene";
import Dinosaur from "../src/components/Scene3d/Dinosaur";
import ListItem from "../src/components/ListItem";
import { Canvas } from "@react-three/fiber";
import { User } from "../src/models/User";
import { createFakeUser } from "./services/createFakeUser";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const nextUsers = createFakeUser(10);
      setUsers(nextUsers);
      setLoading(false);
    }, 750);
  }, []);

  const createUser = () => {
    const nextUsers = createFakeUser(1);
    setUsers([...users, ...nextUsers]);
    // setUsers((prev) => [...prev, ...nextUsers]);
  };
  const deleteUser = (id: number) => {
    console.log(id);
  };
  return (
    <>
      <div className="c-LandingPage">
        <div className="c-LandingPage__Content">
          <Button isDisabled={false}>
            <span>Explosion</span>
          </Button>
          <Button isDisabled={false}>
            <span>Lumière</span>
          </Button>

          <Button isDisabled={false} onClick={createUser}>
            <span>Create user</span>
          </Button>
          <input
            type="text"
            onChange={(event) => setFilter(event.target.value)}
          />
        </div>
        <div className="c-LandingPage__Listitem">
          <Button onClick={() => setCount(count + 1)}>
            Counteur : {count}
          </Button>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <ListContainer>
              {users
                .filter((user) => user.name.match(new RegExp(filter, "ig")))
                .map(({ id, name, avatar }) => (
                  <ListItem
                    key={id}
                    name={name}
                    avatar={avatar}
                    onClick={() => deleteUser(id)}
                  />
                ))}
            </ListContainer>
          )}
        </div>
        <div className="c-LandingPage__Scene">
          <Canvas>
            <Environment
              background={"only"}
              files={"../public/models/textures/envmap_blur.hdr"}
              ground={{ height: 100, radius: 300 }}
            />
            <Environment
              background={false}
              files={"../public/models/textures/envmap.hdr"}
            />
            <PerspectiveCamera
              makeDefault
              fov={33}
              position={[-0.07, 16.41, -24.1]}
            />
            <OrbitControls
              target={[0.02, 0.806, 0.427]}
              maxPolarAngle={Math.PI * 0.45}
            />
            <Suspense fallback={null}>
              <Scene />
              <Dinosaur />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
}

const Button = styled.button<{ isDisabled?: boolean }>`
  width: "fit-content";
  height: 50px;
  background-color: red;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  user-select: ${({ isDisabled }) => (isDisabled ? "none" : "initiale")};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  border-radius: 0.125rem;
  padding: 0.5rem;

  &:hover {
    opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 0.75)};
  }

  span {
    color: white;
    font-size: 24px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default App;
