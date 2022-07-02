import React from "react";

const Main = ({ children }) => {
  return (
    <main className="w-full h-full bg-white rounded-lg p-4 overflow-y-auto border-2">
      {children}
    </main>
  );
};

export default Main;
