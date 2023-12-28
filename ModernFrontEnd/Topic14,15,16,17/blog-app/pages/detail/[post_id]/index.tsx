import { AxiosError } from "axios";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import { getPostID } from "../../../services/posts";
import PostCard from "../../../shared/components/Card";

const DetailPostID = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { push, query } = useRouter();

  return (
    <div>
      <PostCard {...props.post} full />;
      <button
        className="px-4 py-2 bg-gray-500 text-white"
        onClick={() => push(query.post_id + "/edit")}
      >
        Edit
      </button>
    </div>
  );
};

export default DetailPostID;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log("server side", context.query);
  const id = context.query.post_id as string | number;

  try {
    const res = await getPostID(id);

    return {
      props: {
        post: res.data,
      },
    };
  } catch (err: any) {
    return {
      props: {
        isError: true,
        error_message: err?.message,
      },
    };
  }
}
