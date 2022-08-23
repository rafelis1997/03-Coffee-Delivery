import styled from 'styled-components'

export const CartItemSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0 24px 4px;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const CartItemTitleContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  height: 100%;
  align-items: center;
  max-height: 4rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CartItemTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  span {
    margin-bottom: 4px;
  }
`

export const CartItemTitleInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const CartItemTitleQuantity = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    padding: 0 0.5rem;
    gap: 4px;
    cursor: pointer;

    span {
      margin: 0;
      text-transform: uppercase;
      font-size: 0.75rem;
    }

    svg {
      color: ${(props) => props.theme['product-purple-dark']};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
`
