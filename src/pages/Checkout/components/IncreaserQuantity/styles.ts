import styled from 'styled-components'

export const NumberInput = styled.div`
  display: inline-flex;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme['base-button']};
  height: 100%;
  gap: 0.25rem;
  align-items: center;
  font-size: 1.25;
  padding: 0.5rem;

  div {
    padding: 0.25rem;
  }

  button {
    outline: none;
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    border-radius: 8px;
    color: ${(props) => props.theme['product-purple-dark']};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0;
    position: relative;
    padding: 0.25rem;

    font-weight: 700;
    font-size: 1.25rem;

    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${(props) => props.theme['product-purple']};
    }
  }
`
