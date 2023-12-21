import { useState } from "react";

export const useModal = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return { isOpen, toggle, open, close };
};
