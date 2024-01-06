import Image from "next/image";
import React from "react";

type Props = {
  id: number | string;
  title: string;
  body: string;
  full?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
};

const PostCard: React.FC<Props> = ({
  title,
  body,
  full,
  onClick,
  onRemove,
}) => {
  return (
    <div
      className={`p-5 border border-gray-300 shadow overflow-hidden rounded-xl ${
        full ? "w-full" : "w-[48%]"
      }  flex flex-col gap-3 ${onClick ? "cursor-pointer" : ""}`}
    >
      {/* <Image width={200} height={200} src="/vercel.svg" alt="test" /> */}
      <Image
        width={200}
        height={200}
        onClick={onClick}
        className="w-full rounded-xl"
        src="https://smashballoon.com/wp-content/uploads/2020/04/types-of-instagram-posts-624x297.jpg"
        alt="test"
      />
      <p className="text-xl">{title}</p>
      <p className="text-lg text-gray-500">{body}</p>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default PostCard;
