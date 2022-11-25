import React from "react";

export default function Button({ text, type }: any) {
  const commonCls = `px-4 py-2 rounded-lg`;
  const primaryCls = `bg-indigo-500 hover:bg-indigo-600`;
  const secondaryCls = `bg-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white`;

  const finalCls = type === "primary" ? primaryCls : secondaryCls;
  return <button className={`${commonCls} ${finalCls}`}>{text}</button>;
}
