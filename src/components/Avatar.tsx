import "./Avatar.css";

type Avatar = {
  avatar: string;
};

function Avatar({ avatar }: Avatar) {
  return (
    <>
      <div className="c-Avatarcontainer">
        <img
          src={avatar}
          className="c-Avatarcontainer__img"
          width={100}
          height={100}
        />
      </div>
    </>
  );
}

export default Avatar;
