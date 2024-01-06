import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { addPost } from "../services/posts";
import { useForm } from "../shared/hooks/useForm";
import Layout from "../shared/components/Layout";

const EditPage = () => {
  const { push } = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: addPost,
    mutationKey: ["add_post"],
    onSuccess: (newPostData) => {
      push("/");

      // queryClient.invalidateQueries({
      //   queryKey: ["postlarim"],
      // });

      //       const postlarim = queryClient.getQueryData(["postlarim"])
      //       const newPostlarim = [...postlarim,newPostData]
      // queryClient.setQueryData(["postlarim"],newPostlarim)
    },
  });

  const { form, handleChange, handleSubmit } = useForm({
    initialForm: {
      title: "",
      body: "",
    },
    onSubmit: (data: any) => {
      mutate(data);
    },
  });

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
          {isPending ? "Loading..." : "Create"}
        </button>
      </div>
    </Layout>
  );
};

export default EditPage;
