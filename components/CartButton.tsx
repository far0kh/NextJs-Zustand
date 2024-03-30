'use client';

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { useEffect } from "react";

export default function CartButton() {
  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, []);

  const { count } = useCartStore();

  return (
    <Link href="/cart" className="p-2 rounded-md hover:bg-slate-900 text-slate-700 hover:text-slate-300 relative transition duration-200 ease-in-out">
      <ShoppingCartIcon className="w-9 h-9" />
      <span className="absolute top-0 right-0 w-4 h-4 bg-red-400 text-white font-semibold text-xs rounded-full grid place-content-center">
        {count()}
      </span>
    </Link>
  )
}