import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import {
  ContentContainer,
  FinishContainer,
  Icon,
  PinPoints,
  PinPointsContainer,
} from './styles'
import illustration from '../../assets/Illustration.svg'

export function Finish() {
  const { address } = useContext(CartContext)

  return (
    <FinishContainer>
      <div>
        <h1>Uhuu! seu pedido está a caminho</h1>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
      </div>
      <ContentContainer>
        <PinPointsContainer>
          <PinPoints>
            <Icon color="purple">
              <MapPin size={16} weight="fill" />
            </Icon>

            <div>
              <span>
                Entrega em{' '}
                <strong>{' ' + address?.rua + ',' + address?.numero}</strong>{' '}
              </span>
              <span>
                {address?.bairro} - {address?.cidade}, {address?.estado}
              </span>
            </div>
          </PinPoints>

          <PinPoints>
            <Icon color="yellow">
              <Timer size={16} weight="fill" />
            </Icon>

            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </PinPoints>

          <PinPoints>
            <Icon color="darkYellow">
              <CurrencyDollar size={16} weight="fill" />
            </Icon>
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>{address?.pagamento}</strong>
              </span>
            </div>
          </PinPoints>
        </PinPointsContainer>

        <img
          src={illustration}
          height="100%"
          alt="desenho de homem andando em moto com a entrega"
        />
      </ContentContainer>
    </FinishContainer>
  )
}
