import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 40px;
  }

  div {
    display: flex;
    gap: 0.75rem;
    justify-content: flex-start;
    align-items: center;
  }

  span {
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    font-size: 0.875rem;

    border-radius: 6px;

    background: ${(props) => props.theme['product-purple-light']};
    color: ${(props) => props.theme['product-purple-dark']};

    span {
      padding: 0;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    font-size: 1rem;

    padding: 8px;
    border: 0;
    border-radius: 6px;

    background: ${(props) => props.theme['product-yellow-light']};
    color: ${(props) => props.theme['product-yellow-dark']};

    cursor: pointer;

    transition: background 0.2s ease;

    &:hover {
      background: ${(props) => props.theme['product-yellow']};
    }
  }
`
