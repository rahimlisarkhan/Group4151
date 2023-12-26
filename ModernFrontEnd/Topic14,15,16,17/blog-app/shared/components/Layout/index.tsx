import React, { PropsWithChildren } from "react";

type LayoutProps = {
  footer?: boolean;
};

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  footer,
  children,
}) => {
  return (
    <>
      <main className="min-h-screen">{children}</main>
      {footer && <footer className="p-20 h-80  bg-green-950">Footer</footer>}
    </>
  );
};

export default Layout;
