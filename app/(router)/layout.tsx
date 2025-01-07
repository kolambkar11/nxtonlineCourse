import React from "react";
import Sidenav from "./_components/Sidenav";
import Header from "./_components/Header";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="sm:w-64 md:block hidden fixed">
        <Sidenav />
      </div>
      <div className="sm:ml-64">
        <Header />
        {children}
      </div>
    </>
  );
};

export default layout;
