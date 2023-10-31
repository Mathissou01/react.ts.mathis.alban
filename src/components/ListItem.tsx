import styled from "@emotion/styled";
import Avatar from "../components/Avatar";

type Props = {
  avatar: string;
  name: string;
};
const ListItem = ({ name, avatar }: Props) => {
  return (
    <ItemContainer>
      <Avatar avatar={avatar} />
      {name}
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default ListItem;
