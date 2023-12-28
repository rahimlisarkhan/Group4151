import { useState } from "react";

type Arguments = {
  initialForm: Object;
  onSubmit: (data: Object) => void;
};

export const useForm = ({ initialForm, onSubmit }: Arguments) => {
  const [form, setForm] = useState(initialForm);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newForm = { ...form, [name]: value };

    setForm(newForm);
  };

  const handleSubmit = () => {
    console.log(form);
    onSubmit(form);
  };

  return {
    handleChange,
    form,
    handleSubmit,
    setForm,
  };
};
