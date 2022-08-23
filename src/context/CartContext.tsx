import { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AdressFormData } from '../pages/Checkout'

type Coffee = {
  id: number
  imgUrl: string
  labels: string[]
  title: string
  subtitle: string
  price: number
  quantity: number
}

type Address = {
  cep: number
  rua: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  estado: string
  pagamento: string
}

interface CartContextType {
  cart: Coffee[]
  addItemToCart: (data: Coffee) => void
  removeItemOfCart: (id: number) => void
  quantityItemChange: (id: number, quantity: number) => void
  setAddress: (data: Address) => void
  address?: Address
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Coffee[]>([])
  const [address, setAddress] = useState<Address>()

  function addItemToCart(data: Coffee) {
    const newItem = data

    setCart((state) => [...state, newItem])
  }

  function removeItemOfCart(id: number) {
    const newItem = cart.filter((c) => c.id !== id)

    setCart(newItem)
  }

  function quantityItemChange(id: number, quantity: number) {
    const newItem = cart.map((c) => {
      if (c.id !== id) {
        return c
      } else {
        return { ...c, quantity }
      }
    })

    setCart(newItem)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemOfCart,
        quantityItemChange,
        setAddress,
        address,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
