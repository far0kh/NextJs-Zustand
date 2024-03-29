import Link from "next/link";
import CartButton from "./CartButton";

export default function Navbar() {
  return <nav>
    <div className="mx-auto max-w-6xl flex justify-between items-center text-sm text-slate-100 py-4">
      <Link href="/">
        <div className="uppercase font-bold">coffee<span className="text-teal-500">shop</span></div>
      </Link>

      <div className="flex gap-1 items-center">
        <CartButton />
      </div>
    </div>
  </nav>
}