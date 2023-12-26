import Image from "next/image";
import React from "react";

type Props = {
  id: number;
  title: string;
  body: string;
};

const PostCard: React.FC<Props> = ({ title, body }) => {
  return (
    <div className="p-5 border border-gray-300 shadow overflow-hidden rounded-xl w-[48%] flex flex-col gap-3">
      {/* <Image width={200} height={200} src="/vercel.svg" alt="test" /> */}
      <Image
        width={200}
        height={200}
        className="w-full rounded-xl"
        src="https://smashballoon.com/wp-content/uploads/2020/04/types-of-instagram-posts-624x297.jpg"
        alt="test"
      />
      <p className="text-xl">{title}</p>
      <p className="text-lg text-gray-500">{body}</p>
    </div>
  );
};

export default PostCard;
