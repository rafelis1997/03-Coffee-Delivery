import { Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { IncreaserQuantity } from '../../../../components/IncreaserQuantity'
import { CartContext } from '../../../../context/CartContext'
import {
  CartItemSummaryContainer,
  CartItemTitle,
  CartItemTitleContainer,
  CartItemTitleInner,
  CartItemTitleQuantity,
} from './style'

interface CartItemsPropsData {
  coffee: {
    id: number
    imgUrl: string
    title: string
    price: number
    quantity: number
  }
}

export function CartItems({
  coffee: { id, quantity, imgUrl, price, title },
}: CartItemsPropsData) {
  const { removeItemOfCart, quantityItemChange } = useContext(CartContext)
  const [quantityItem, setQuantityItem] = useState(quantity)

  useEffect(() => {
    quantityItemChange(id, quantityItem)
  }, [quantityItem])

  return (
    <CartItemSummaryContainer>
      <CartItemTitleContainer>
        <img src={imgUrl} alt="" width={64} />
        <CartItemTitle>
          <CartItemTitleInner>
            <span>{title}</span>
            <CartItemTitleQuantity>
              <IncreaserQuantity
                quantity={quantityItem}
                setQuantity={setQuantityItem}
              />
              <button onClick={() => removeItemOfCart(id)}>
                <Trash size={16} />
                <span>Remover</span>
              </button>
            </CartItemTitleQuantity>
          </CartItemTitleInner>
        </CartItemTitle>
      </CartItemTitleContainer>
      <span>
        R${price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </span>
    </CartItemSummaryContainer>
  )
}
