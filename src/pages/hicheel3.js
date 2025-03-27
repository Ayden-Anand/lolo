import { useState } from "react";
import { useRouter } from "next/router";

export default function Lab3() {
  const [name, setName] = useState("");
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
        <label className="text-xl  text-gray-800">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="ml-2 px-3 py-1 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(222,197,177)]"
          />
        </label>
        <p className="text-2xl text-gray-800">
          Hi {name === "" ? "suragch" : name}!
        </p>
      </div>
    </div>
  );
}