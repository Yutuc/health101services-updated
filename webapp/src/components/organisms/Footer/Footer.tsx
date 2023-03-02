import React from "react";

export interface AppHeaderProps {
  navAction?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Footer({}: AppHeaderProps) {
  return (
    <div className="h-1/6 flex justify-center">
      <h1 className="text-4xl">Footer Placeholder</h1>
    </div>
  );
}
