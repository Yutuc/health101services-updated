import React from "react";
export interface AppBodyProps {
  children: React.ReactNode;
}

export default function AppBody({ children }: AppBodyProps) {
  return (
    <div className="flex w-full h-full">
      <div className="overflow-y-scroll w-full">
        <div className="final-wrapper p-2 min-h-full sm:w-full md:w-9/12 w-7/12 mx-auto max-w-screen-lg flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
