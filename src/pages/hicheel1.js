import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [click, setClick] = useState("sideeye");
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[rgb(128,111,98)] p-6 relative">
      <button
        className="absolute top-6 right-6 font-bold text-xl bg-[rgb(255,235,184)] text-[rgb(28,23,17)] px-6 py-2 rounded-lg shadow-md hover:bg-[rgb(189,175,140)] transition"
        onClick={() => router.push("/")}
      >
        Home
      </button>
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center space-y-4 h-[200px] border border-gray-300">
        <button
          className="font-bold text-xl bg-[rgb(222,197,177)] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[rgb(200,180,160)] transition"
          onClick={() => setClick("bombastic")}
        >
          Touch Me
        </button>
        <button
          className="font-bold text-xl bg-[rgb(222,197,177)] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[rgb(200,180,160)] transition"
          onClick={() => setClick("")}
        >
          Delete
        </button>
        {click && <p className="text-2xl font-semibold text-gray-800">{click}</p>}
      </div>
    </div>
  );
}