import styled from 'styled-components'
import heroBackground from '../../assets/heroBackground.svg'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
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

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.theme['base-text']};
      border-radius: 100%;
      padding: 5px;
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

      button {
        padding: 6px 12px;
        border: 1px solid ${(props) => props.theme['product-yellow-dark']};
        border-radius: 16px;
        color: ${(props) => props.theme['product-yellow-dark']};
      }
    }
  }
`

export const CoffeeList = styled.div``
