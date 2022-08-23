import styled from 'styled-components'

export const FinishContainer = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 5rem 0;

  h1 {
    color: ${(props) => props.theme['product-yellow-dark']};
  }
`

export const PinPointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
  margin: 2.5rem 0;
  padding: 2.5rem;

  border: 1px solid transparent;
  border-radius: 6px;
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  background: ${(props) =>
    `linear-gradient(${props.theme.background}, ${props.theme.background}) padding-box, linear-gradient(135deg, ${props.theme['product-yellow']}, ${props.theme['product-purple']}) border-box;`};
`

export const PinPoints = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.875rem;
  align-items: center;
  text-transform: capitalize;

  svg {
    border-radius: 9999;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`
const COLORS = {
  purple: 'product-purple',
  yellow: 'product-yellow',
  darkYellow: 'product-yellow-dark',
} as const

interface IconProps {
  color: keyof typeof COLORS
}

export const Icon = styled.div<IconProps>`
  padding: 0.5rem;
  border-radius: 1rem;
  background: ${(props) => props.theme[COLORS[props.color]]};

  svg {
    color: ${(props) => props.theme.background};
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20rem;
`
