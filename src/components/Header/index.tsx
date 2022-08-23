import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoCoffee from '../../assets/logo.svg'
import { CartContext } from '../../context/CartContext'
import { HeaderContainer, LogoContainer } from './styles'

export function Header() {
  const { cart } = useContext(CartContext)
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    const itemsOnCart = cart.length

    setCartItems(itemsOnCart)
  }, [cart])

  return (
    <HeaderContainer>
      <LogoContainer>
        <NavLink to="/" title="Coffee Delivery">
          <img src={logoCoffee} alt="" />
        </NavLink>
      </LogoContainer>

      <div>
        <span>
          <MapPin size={22} weight="fill" />

          <span>Curitiba, PR</span>
        </span>
        <NavLink to="/checkout" title="Coffee Delivery - Checkout">
          {cartItems > 0 ? <span>{cartItems}</span> : ''}
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
