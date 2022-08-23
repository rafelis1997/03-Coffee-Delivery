import { ShoppingCart } from 'phosphor-react'
import React, { useContext, useState } from 'react'
import { IncreaserQuantity } from '../../../../components/IncreaserQuantity'
import { CartContext } from '../../../../context/CartContext'
import {
  CartButton,
  CoffeeContainer,
  CoffeeDescription,
  CoffeeForm,
  CoffeeFormContainer,
  CoffeeLabel,
  CoffeeLabelContainer,
} from './styles'

interface CoffeeProps {
  coffee: {
    id: number
    imgUrl: string
    labels: string[]
    title: string
    subtitle: string
    price: number
  }
}

export function CoffeeItem({
  coffee: { id, imgUrl, labels, title, subtitle, price },
}: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  const { cart, addItemToCart } = useContext(CartContext)

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const data = {
      id,
      imgUrl,
      labels,
      title,
      subtitle,
      price,
      quantity,
    }

    console.log(cart)

    addItemToCart(data)
  }

  return (
    <CoffeeContainer>
      <img src={imgUrl} alt="" />
      <CoffeeLabelContainer>
        {labels.map((l) => {
          return <CoffeeLabel key={l}>{l}</CoffeeLabel>
        })}
      </CoffeeLabelContainer>

      <CoffeeDescription>
        <h1>{title}</h1>
        <span>{subtitle}</span>
      </CoffeeDescription>
      <CoffeeFormContainer>
        <span>
          R${' '}
          <span>
            {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
        </span>
        <CoffeeForm onSubmit={handleSubmit}>
          <IncreaserQuantity quantity={quantity} setQuantity={setQuantity} />
          <CartButton type="submit">
            <ShoppingCart size={20} weight="fill" />
          </CartButton>
        </CoffeeForm>
      </CoffeeFormContainer>
    </CoffeeContainer>
  )
}
