import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  margin: 2.5rem auto;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.625rem;
  max-width: 640px;
  h1 {
    font-size: 1.25rem;
    margin-bottom: 15px;
  }
`

export const CheckoutForm = styled.form`
  display: flex;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 2.5rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  div {
    display: flex;
    width: 100%;
    gap: 2rem;
    margin-bottom: 1rem;

    div {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`

export const InputBase = styled.input`
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  display: block;
  width: 200px;

  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
`

export const RuaInput = styled(InputBase)`
  width: 100%;
`
export const ComplementInput = styled(InputBase)`
  flex: 1;
`
export const CityInput = styled(InputBase)`
  flex: 1;
`
export const StateInput = styled(InputBase)`
  width: 10%;
`

export const PaymentContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 2.5rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`
export const PaymentTitle = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  margin-bottom: 1rem;

  div {
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const PaymentButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  gap: 0.75rem;
`
interface PaymentButtonProps {
  isActive: boolean
}

export const PaymentButton = styled.button<PaymentButtonProps>`
  display: flex;
  flex: 1;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  gap: 0.75rem;
  font-size: 0.75rem;

  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};

  svg {
    color: ${(props) => props.theme['product-purple']};
  }

  :focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['product-purple-dark']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  border: ${(props) =>
    props.isActive ? `1px solid ${props.theme['product-purple-dark']}` : ''};
  background: ${(props) =>
    props.isActive
      ? props.theme['product-purple-light']
      : props.theme['base-button']};
`
export const CartItensCheckoutContainer = styled.div`
  width: 100%;
  max-width: 448px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.625rem;
  h1 {
    font-size: 1.25rem;
    margin-bottom: 15px;
  }
`
export const CartItemsSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  padding: 2.5rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
`
export const TotalSummaryContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.75rem;
`

export const TotalSummaryLables = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-bottom: 0;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const SummaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['product-yellow']};
  padding: 0.75rem 0.5rem;
  width: 100%;

  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme['product-yellow-dark']};
  }
`
