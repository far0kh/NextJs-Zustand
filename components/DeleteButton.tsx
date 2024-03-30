import { TrashIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart";

type Props = { idProduct: number }

export default function DeleteButton({ idProduct }: Props) {
  const { remove } = useCartStore();

  return (
    <button className="text-red-400 hover:bg-red-400 hover:bg-opacity-10 px-4 text-sm py-2 rounded-md"
      onClick={() => {
        remove(idProduct);
        close();
      }}>
      <TrashIcon className="w-5 h-5" />
    </button>
  )
}