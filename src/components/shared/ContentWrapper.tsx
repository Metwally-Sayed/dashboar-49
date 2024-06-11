import React from "react";

type Props = {
  children: React.ReactNode;
};

const ContentWrapper = ({ children }: Props) => {
  return <div className="p-7 w-full">{children}</div>;
};

export default ContentWrapper;
