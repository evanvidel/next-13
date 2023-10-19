import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-4xl">Seja bem vindo </h1>
      <Link href={"/blog"} className="border p-4 rounded-md hover:bg-slate-900">
        Ir para o Blog
      </Link>
    </div>
  );
}
