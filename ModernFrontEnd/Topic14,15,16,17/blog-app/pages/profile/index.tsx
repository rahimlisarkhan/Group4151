import { NextPage } from "next";

const Profile: NextPage = () => {
  // react query ... for client

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    // Your click handling logic here
  };

  return (
    <div>
      <h1>Profile</h1>

      <button
        onClick={(e) => {
          console.log(e);
        }}
      ></button>
    </div>
  );
};

export default Profile;
