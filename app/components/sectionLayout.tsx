import React, { Children } from "react";
interface sectionLayoutProps {
  children: React.ReactNode;
  ref: React.RefObject<HTMLDivElement>;
}

function sectionLayout({ children, ref }: sectionLayoutProps) {
  return (
    <div
      style={{
        padding: "5rem 10rem",
      }}
    >
      {children}
    </div>
  );
}

export default sectionLayout;
