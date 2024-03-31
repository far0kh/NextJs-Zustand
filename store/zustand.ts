import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Product = {
  id: number,
  name: string,
  price: number
}

type CartItem = Product & { count: number }

type CartStore = {
  cart: CartItem[],
  add: (product: Product) => void,
  remove: (idProduct: number) => void,
  removeAll: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    set => ({
      cart: [],
      add: (product: Product) =>
        set(state => ({
          cart: updateCart(product, state.cart)
        })),
      remove: (idProduct: number) =>
        set(state => ({
          cart: removeCart(idProduct, state.cart)
        })),
      removeAll: () => ({ cart: [] }),
    }),
    { name: 'task-store', skipHydration: true }
  )
)

function updateCart(product: Product, cart: CartItem[]): CartItem[] {
  const cartItem = { ...product, count: 1 } as CartItem;

  const productOnCart = cart.map(item => item.id).includes(product.id);

  if (!productOnCart) cart.push(cartItem)
  else {
    return cart.map(item => {
      if (item.id === product.id)
        return { ...item, count: item.count + 1 } as CartItem;
      return item
    })
  }

  return cart;
}

function removeCart(idProduct: number, cart: CartItem[]): CartItem[] {
  return cart.map(item => {
    if (item.id === idProduct)
      return { ...item, count: item.count - 1 }
    return item;
  }).filter(item => {
    return item.count;
  });
}