const kv = await Deno.openKv("kv/db.sqlite3")
export default function Home() {
  return (
    <div class="px-4 py-8 flex min-h-screen mx-auto flex-col justify-center bg-bg">
      <div class="flex flex-col items-center">
        <h1 class="text-4xl mb-4">Welcome to CMLI</h1>
        <div class=""></div>
        <button class="btn">Click me</button>
      </div>
    </div>
  );
}
