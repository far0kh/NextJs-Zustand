'use client'

import { useCartStore } from "@/store/cart"
import DeleteButton from "./DeleteButton";
import { useEffect } from "react";

export default function ListCart() {
  const { cart } = useCartStore();

  return (
    <div className="flex flex-col gap-2 mt-4">
      <table className="text-slate-400">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.length
            ? cart.map((item, index) => <tr key={item.id}>
              <td className="text-center">{index + 1}</td>
              <td>{item.name}</td>
              <td className="text-right">{item.price}</td>
              <td className="text-center">{item.count}</td>
              <td className="text-right">{item.count * item.price}</td>
              <td className="text-center">
                <DeleteButton idProduct={item.id} />
              </td>
            </tr>)
            : <tr><td colSpan={5} className="text-center text-slate-600 py-2">No Data</td></tr>
          }
        </tbody>
      </table>
    </div>
  )
}