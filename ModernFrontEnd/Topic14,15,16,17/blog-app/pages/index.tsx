import Head from "next/head";
import Image from "next/image";
import Header from "../shared/components/Header";
import Layout from "../shared/components/Layout";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getPosts } from "../services/posts";
import { useMemo } from "react";
import PostCard from "../shared/components/Card";
import { PostDataType } from "../interface/data";
import { useRouter } from "next/router";

// const inter = Inter({ subsets: ["latin"] });

// https://smashballoon.com/wp-content/uploads/2020/04/types-of-instagram-posts-624x297.jpg

export default function Home<NextPage>(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  console.log("props", props);

  const { push } = useRouter();

  const posts = useMemo(() => props.posts, [props.posts]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Layout footer>
        <div className="max-w-6xl mx-auto py-10 flex flex-wrap gap-5">
          {posts?.map((post: PostDataType) => (
            <PostCard
              key={post.id}
              {...post}
              onClick={() => push("/detail/" + post.id)}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps<GetServerSideProps>(
  context: GetServerSidePropsContext
) {
  try {
    const res = await getPosts();
    // const res = await getCateog();

    return {
      props: {
        posts: res.data,
      },
    };
  } catch (err) {
    return {
      props: {
        isError: true,
      },
    };
  }
}
