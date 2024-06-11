import React from "react";

type Props = {
  children: React.ReactNode;
};

const PageHeader = ({ children }: Props) => {
  return <h2 className=" text-3xl font-semibold ">{children}</h2>;
};

export default PageHeader;
