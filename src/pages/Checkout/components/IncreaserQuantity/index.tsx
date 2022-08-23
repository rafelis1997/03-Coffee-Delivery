import React from 'react'
import { NumberInput } from './styles'

interface IncreaserQuantityProps {
  quantity: number
  setQuantity: (value: number) => void
}

export function IncreaserQuantity({
  quantity,
  setQuantity,
}: IncreaserQuantityProps) {
  function handleProductCounterAdd(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault()
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
  }

  function handleProductCounterSubtract(
    event: React.FormEvent<HTMLButtonElement>,
  ) {
    event.preventDefault()
    if (quantity > 0) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
    }
  }

  return (
    <NumberInput>
      <button onClick={handleProductCounterSubtract}>-</button>
      <div>{quantity}</div>
      <button onClick={handleProductCounterAdd}>+</button>
    </NumberInput>
  )
}
