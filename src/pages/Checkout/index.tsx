import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItems } from './components/CartItems'
import {
  CheckoutContainer,
  CheckoutForm,
  CheckoutFormContainer,
  CityInput,
  ComplementInput,
  InputBase,
  RuaInput,
  StateInput,
  PaymentContainer,
  PaymentTitle,
  PaymentButtonsContainer,
  PaymentButton,
  CartItensCheckoutContainer,
  CartItemsSummary,
  TotalSummaryContainer,
  TotalSummaryLables,
  SummaryButton,
} from './styles'
import { useNavigate } from 'react-router-dom'

export interface CartItemsProps {
  id: number
  imgUrl: string
  title: string
  price: number
  quantity: number
}

const AdressFormValidationSchema = zod.object({
  cep: zod
    .number({ required_error: 'Esse campo precisa ser preenchido' })
    .min(8, 'CEP inválido'),
  rua: zod
    .string({ required_error: 'Esse campo precisa ser preenchido' })
    .min(5),
  numero: zod
    .number({ required_error: 'Esse campo precisa ser preenchido' })
    .min(1, 'Adicione um número válido'),
  bairro: zod.string({ required_error: 'Esse campo precisa ser preenchido' }),
  complemento: zod.string(),
  cidade: zod.string({ required_error: 'Esse campo precisa ser preenchido' }),
  estado: zod
    .string({ required_error: 'Esse campo precisa ser preenchido' })
    .max(2),
})

export type AdressFormData = zod.infer<typeof AdressFormValidationSchema>

export function Checkout() {
  const [isActive, setIsActive] = useState([false, false, false])
  const [totalItemsPrice, setTotalItemsPrice] = useState(0)

  const { cart, setAddress } = useContext(CartContext)

  const addressForm = useForm<AdressFormData>({
    resolver: zodResolver(AdressFormValidationSchema),
    defaultValues: {
      rua: '',
      bairro: '',
      complemento: '',
      cidade: '',
      estado: '',
    },
  })

  const delivery = 3.5

  useEffect(() => {
    const totalItems = cart.reduce((acum, cur) => {
      return acum + cur.price * cur.quantity
    }, 0)

    setTotalItemsPrice(totalItems)
  }, [cart])

  function handlePaymentSelection(event: EventTarget & HTMLButtonElement) {
    const isActiveButton = !event.getAttribute('isActive')

    if (event.value === 'one') {
      console.log(isActiveButton)
      return setIsActive([isActiveButton, false, false])
    }
    if (event.value === 'two') {
      return setIsActive([false, isActiveButton, false])
    }
    if (event.value === 'three') {
      return setIsActive([false, false, isActiveButton])
    }
  }
  const navigate = useNavigate()
  function handleSubmitOrder(data: AdressFormData) {
    navigate('/finish')
    let metodoDePagamento

    if (isActive[0] === true) {
      metodoDePagamento = 'cartão de crédito'
    } else if (isActive[1] === true) {
      metodoDePagamento = 'cartão de débito'
    } else if (isActive[2] === true) {
      metodoDePagamento = 'dinheiro'
    }

    const order = {
      ...data,
      pagamento: metodoDePagamento,
    }

    setAddress(order)
  }

  const { handleSubmit, register } = addressForm

  return (
    <CheckoutContainer>
      <CheckoutFormContainer>
        <h1>Complete seu pedido</h1>
        <CheckoutForm onSubmit={handleSubmit(handleSubmitOrder)}>
          <div>
            <MapPinLine size={32} />
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <InputBase
            type="number"
            placeholder="CEP"
            required
            id="cep"
            {...register('cep', { valueAsNumber: true })}
          />
          <RuaInput
            type="text"
            placeholder="Rua"
            required
            id="rua"
            {...register('rua')}
          />
          <InputBase
            type="number"
            placeholder="Número"
            required
            id="numero"
            {...register('numero', { valueAsNumber: true })}
          />
          <ComplementInput
            type="text"
            placeholder="Complemento"
            id="complemento"
            {...register('complemento')}
          />
          <InputBase
            type="text"
            placeholder="Bairro"
            required
            id="bairro"
            {...register('bairro')}
          />
          <CityInput
            type="text"
            placeholder="Cidade"
            required
            id="cidade"
            {...register('cidade')}
          />
          <StateInput
            type="text"
            placeholder="UF"
            required
            id="estado"
            {...register('estado')}
          />
          <SummaryButton type="submit">Confirmar Pedido</SummaryButton>
        </CheckoutForm>

        <PaymentContainer>
          <PaymentTitle>
            <CurrencyDollar size={32} />
            <div>
              <h3>Pagamento</h3>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </PaymentTitle>

          <PaymentButtonsContainer>
            <PaymentButton
              onClick={(e) => handlePaymentSelection(e.currentTarget)}
              value="one"
              isActive={isActive[0]}
            >
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </PaymentButton>

            <PaymentButton
              onClick={(e) => handlePaymentSelection(e.currentTarget)}
              value="two"
              isActive={isActive[1]}
            >
              <Bank size={16} />
              <span>cartão de débito</span>
            </PaymentButton>

            <PaymentButton
              onClick={(e) => handlePaymentSelection(e.currentTarget)}
              value="three"
              isActive={isActive[2]}
            >
              <Money size={16} />
              <span>dinheiro</span>
            </PaymentButton>
          </PaymentButtonsContainer>
        </PaymentContainer>
      </CheckoutFormContainer>

      <CartItensCheckoutContainer>
        <h1>Cafés Selecionados</h1>
        <CartItemsSummary>
          {cart.length > 0 ? (
            cart.map((coffee) => {
              return <CartItems key={coffee.id} coffee={coffee} />
            })
          ) : (
            <h3>Não há itens no carrinho</h3>
          )}

          <TotalSummaryContainer>
            <TotalSummaryLables>
              <span>Total de Itens</span>
              <span>
                R${' '}
                {totalItemsPrice.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </TotalSummaryLables>
            <TotalSummaryLables>
              <span>Entrega</span>
              <span>
                R${' '}
                {delivery.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </TotalSummaryLables>
            <TotalSummaryLables>
              <h1>Total</h1>
              <h1>
                R${' '}
                {(delivery + totalItemsPrice).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </h1>
            </TotalSummaryLables>
          </TotalSummaryContainer>
        </CartItemsSummary>
      </CartItensCheckoutContainer>
    </CheckoutContainer>
  )
}
