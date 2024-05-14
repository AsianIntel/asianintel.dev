import Image from "next/image";
import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex items-center justify-center gap-x-12 mx-auto container mt-4">
        <Link href="/" className="font-semibold hover:text-slate-400 text-lg">
          Home
        </Link>
        <Image
          src="/favicon.ico"
          alt="AsianIntel"
          width={48}
          height={48}
          className="rounded-full"
        />
        <Link href="/blog" className="font-semibold hover:text-slate-400 text-lg">Blog</Link>
      </header>
      {children}
    </>
  );
}
