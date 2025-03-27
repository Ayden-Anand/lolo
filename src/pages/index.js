"use client";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[rgb(128,111,98)] text-white p-6">
      <h1 className="text-6xl font-bold mb-12 drop-shadow-lg">Ayden</h1>
      <div className="flex flex-wrap justify-center gap-6">
        <button
          className="h-14 w-44 bg-[rgb(222,197,177)] hover:bg-[rgb(200,180,160)] text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95"
          onClick={() => router.push("/hicheel1")}
        >
          Hichel 1
        </button>
        <button
          className="h-14 w-44 bg-[rgb(222,197,177)] hover:bg-[rgb(200,180,160)] text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95"
          onClick={() => router.push("/hicheel2")}
        >
          Hichel 2
        </button>
        <button
          className="h-14 w-44 bg-[rgb(222,197,177)] hover:bg-[rgb(200,180,160)] text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95"
          onClick={() => router.push("/hicheel3")}
        >
          Hichel 3
        </button>
        <button
          className="h-14 w-44 bg-[rgb(222,197,177)] hover:bg-[rgb(200,180,160)] text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95"
          onClick={() => router.push("/hicheel4")}
        >
          Hichel 4
        </button>
      </div>
    </div>
  );
}