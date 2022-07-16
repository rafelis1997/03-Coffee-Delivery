import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import {
  CoffeeContainer,
  CoffeeDescription,
  CoffeeForm,
  CoffeeFormContainer,
  CoffeeLabel,
  NumberInput,
} from './styles'

export function CoffeeItem() {
  const [quantity, setQuantity] = useState(1)

  function handleProductCounterAdd() {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
  }

  function handleProductCounterSubtract() {
    if (quantity > 0) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
    }
  }

  return (
    <CoffeeContainer>
      <img src="CoffeeImages/Expresso.png" alt="" />
      <CoffeeLabel>TRADICIONAL</CoffeeLabel>
      <CoffeeDescription>
        <h1>Expresso Tradicional</h1>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </CoffeeDescription>
      <CoffeeFormContainer>
        <span>
          R$ <span>9,90</span>
        </span>
        <CoffeeForm>
          <NumberInput>
            <button onClick={handleProductCounterSubtract}>-</button>
            <div>{quantity}</div>
            <button onClick={handleProductCounterAdd}>+</button>
          </NumberInput>
          <button type="submit">
            <ShoppingCart size={20} weight="fill" />
          </button>
        </CoffeeForm>
      </CoffeeFormContainer>
    </CoffeeContainer>
  )
}
