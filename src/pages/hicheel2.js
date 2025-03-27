import React, { useState } from "react";
import { useRouter } from "next/router";

const UseStateTask = () => {
  const [color, setColor] = useState("");
  const router = useRouter();

  return (
    <div className={`flex flex-col items-center justify-center w-full h-screen bg-${color}-800 relative`}>
      <button
        className="absolute top-6 right-6 font-bold text-xl bg-[rgb(255,235,184)] text-[rgb(28,23,17)] px-6 py-2 rounded-lg shadow-md hover:bg-[rgb(189,175,140)] transition"
        onClick={() => router.push("/")}
      >
        Home
      </button>
      <p className="text-2xl font-semibold mb-6">Өнгө сонгох:</p>
      <div className="flex space-x-4">
        <button
          className="border w-[120px] bg-red-800 text-white py-4 px-6 rounded-lg shadow-md hover:bg-red-700 transition"
          onClick={() => setColor("red")}
        >
          Улаан
        </button>
        <button
          className="border w-[120px] bg-blue-800 text-white py-4 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => setColor("blue")}
        >
          Цэнхэр
        </button>
        <button
          className="border w-[120px] bg-green-800 text-white py-4 px-6 rounded-lg shadow-md hover:bg-green-700 transition"
          onClick={() => setColor("green")}
        >
          Ногоон
        </button>
        <button
          className="border w-[120px] bg-gray-800 text-white py-4 px-6 rounded-lg shadow-md hover:bg-gray-700 transition"
          onClick={() => setColor("")}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default UseStateTask;