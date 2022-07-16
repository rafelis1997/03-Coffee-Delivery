import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffee from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <div>
        <span>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </span>
        <a href="#">
          <ShoppingCart size={22} weight="fill" />
        </a>
      </div>
    </HeaderContainer>
  )
}
