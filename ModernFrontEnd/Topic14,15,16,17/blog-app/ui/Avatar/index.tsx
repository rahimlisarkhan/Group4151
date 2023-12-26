import React from "react";

type Props = {
  name: string;
  //   color:string
  color?: "red" | "yellow" | "blue" | "pink";
  onAvatarPress?: () => void;
  img_url?: string;
};

const Avatar = ({
  name = "A",
  color = "yellow",
  onAvatarPress,
  img_url,
}: Props) => {
  return (
    <div
      onClick={onAvatarPress}
      className={`w-8 h-8 rounded-full bg-${color}-100 ${
        onAvatarPress ? "cursor-pointer" : ""
      } text-gray-800 font-bold text-lg shadow flex items-center justify-center`}
    >
      {img_url ? <img src={img_url} /> : name}
    </div>
  );
};

export default Avatar;
