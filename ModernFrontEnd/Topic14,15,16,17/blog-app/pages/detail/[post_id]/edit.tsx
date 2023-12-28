import React, { useEffect, useState } from "react";
import Layout from "../../../shared/components/Layout";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getPostID, uptPost } from "../../../services/posts";
import { useRouter } from "next/router";
import { useForm } from "../../../shared/hooks/useForm";

const EditPage = () => {
  const { push, query } = useRouter();

  const post_id = query.post_id as string | number;

  const { data, refetch } = useQuery({
    queryKey: ["post", post_id],
    queryFn: () => getPostID(post_id).then((res) => res.data),
    enabled: false,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: uptPost,
    mutationKey: ["update_post"],
    onSuccess: () => {
      push("/detail/" + post_id);
    },
  });

  const { setForm, form, handleChange, handleSubmit } = useForm({
    initialForm: {
      title: "",
      body: "",
    },
    onSubmit: (res: any) => {
      const data = {
        id: post_id,
        ...res,
      };
      mutate(data);
    },
  });

  //   const [form, setForm] = useState({
  //     title: "",
  //     body: "",
  //   });

  useEffect(() => {
    if (!post_id) return;

    refetch();
  }, [post_id]);

  useEffect(() => {
    if (data) {
      setForm(data);
    }
  }, [data]);

  //   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //     const name = e.target.name;
  //     const value = e.target.value;

  //     const newForm = { ...form, [name]: value };

  //     setForm(newForm);
  //   };

  //   console.log("form", form);

  //   const handleSubmit = () => {
  //     console.log(form);

  //     const data = {
  //       id: post_id,
  //       ...form,
  //     };
  //     mutate(data);
  //   };

  return (
    <Layout>
      <div className="bg-red-200 flex justify-center py-10 px-20 flex-col gap-4">
        <input
          className="border p-3 rounded-md border-gray-400 w-full"
          placeholder="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          className="border p-3 rounded-md border-gray-400 w-full"
          placeholder="Body"
          name="body"
          value={form.body}
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 rounded-md bg-green-700 transition-all text-white hover:opacity-70"
        >
          {" "}
          {isPending ? "Loading..." : "Update"}
        </button>
      </div>
    </Layout>
  );
};

export default EditPage;
