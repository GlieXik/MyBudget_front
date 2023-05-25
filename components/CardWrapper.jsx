import React from "react";

export default function CardWrapper({ children }) {
  return (
    <div className="bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-300 rounded-xl px-4 py-3 shadow-xl">
      {children}
    </div>
  );
}
