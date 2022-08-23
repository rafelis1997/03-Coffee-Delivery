import styled from 'styled-components'
import heroBackground from '../../assets/heroBackground.svg'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 100px;
`

export const HeroSection = styled.section`
  height: 544px;
  padding: 4rem 0;

  background-image: url(${heroBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const HeroContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeroTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  div {
    display: flex;
    flex-direction: column;
    max-width: 588px;
    gap: 1rem;

    span {
      font-size: 1.25rem;
    }
  }
`

export const HeroItemsContainer = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;

    svg {
      color: ${(props) => props.theme.white};
    }

    span {
      font-size: 1rem;
    }
  }
`
export const CoffeeContainer = styled.section`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
  gap: 5.725rem;

  header {
    display: flex;
    justify-content: space-between;
    font-size: 2rem;

    nav {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
    }
  }
`

export const CoffeeList = styled.div`
  display: flex;
  max-width: 1440px;
  flex-wrap: wrap;
  justify-content: center;
`

const ITEMS_BACKGROUND = {
  dark_yellow: 'product-yellow-dark',
  yellow: 'product-yellow',
  dark: 'base-text',
  purple: 'product-purple',
} as const

interface heroItemsProps {
  itemsColor: keyof typeof ITEMS_BACKGROUND
}

export const HeroItems = styled.p<heroItemsProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['base-text']};
  border-radius: 100%;
  padding: 5px;

  background: ${(props) => props.theme[ITEMS_BACKGROUND[props.itemsColor]]};
`

interface selectedFiltersProps {
  isSelected: boolean
}

export const ButtonFilter = styled.button<selectedFiltersProps>`
  padding: 6px 12px;
  border: 2px solid ${(props) => props.theme['product-yellow-dark']};
  border-radius: 16px;
  color: ${(props) =>
    props.isSelected
      ? props.theme.background
      : props.theme['product-yellow-dark']};
  font-weight: 700;

  background: ${(props) =>
    props.isSelected
      ? props.theme['product-yellow-dark']
      : props.theme.background};

  transition: background, color 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme['product-yellow-light']};
  }
`
