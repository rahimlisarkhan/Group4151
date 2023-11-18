import { useLayoutEffect } from "react";

export const useDocumentTitle = (t) => {
  useLayoutEffect(() => {
    document.title = t;
  }, []);
};
