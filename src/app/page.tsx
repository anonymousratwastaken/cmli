import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-full w-full justify-items-center min-h-screen p-20 gap-8 font-mono">
      <img src="/logo-dark.svg" alt="CMLI" className="w-auto dark:h-32 hidden dark:grid" />
      <img src="/logo-light.svg" alt="CMLI" className="w-auto h-32 dark:hidden" />
      <h2 className="text-3xl font-bold text-center">
        The place for Christian music lyrics
        </h2>
    </div>
  );
}
