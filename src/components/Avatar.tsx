import "./Avatar.css";

type Avatar = {
  avatar: string;
};

function Avatar({ avatar }: Avatar) {
  return (
    <>
      <div className="c-Avatarcontainer">
        <img src={avatar} className="c-Avatarcontainer__img" />
      </div>
    </>
  );
}

export default Avatar;
