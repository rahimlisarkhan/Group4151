import React from "react";

function Layout({ children }) {
  return (
    <div className="px-6 py-8  max-w-full xl:max-w-6xl mx-auto">{children}</div>
  );
}

export default Layout;
