import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  width: 256px;
  height: 310px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.25rem;

  border-radius: 6px 36px 6px 36px;

  background: ${(props) => props.theme['base-card']};

  img {
    top: -20px;
    position: relative;

    width: 120px;
    height: 120px;
  }

  span {
    font-size: 0.625rem;
    margin-bottom: 16px;
  }
`

export const CoffeeLabel = styled.span`
  background: ${(props) => props.theme['product-yellow-light']};
  color: ${(props) => props.theme['product-yellow-dark']};
  border-radius: 15px;
  padding: 4px 8px;
`

export const CoffeeDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 20px;

  h1 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }
`

export const CoffeeFormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    margin-bottom: 0;

    span {
      font-size: 1.5rem;
      font-family: 'Baloo 2', sans-serif;
    }
  }
`

export const CoffeeForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  gap: 0.5rem;

  input {
    width: 2rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    background: ${(props) => props.theme['product-purple-dark']};
    color: ${(props) => props.theme['base-card']};
    border: 0;
    border-radius: 6px;
  }
`
export const NumberInput = styled.div`
  border: 2px solid #ddd;
  display: inline-flex;

  input[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  button {
    outline: none;
    -webkit-appearance: none;
    background-color: #eeeeee;
    border: none;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    cursor: pointer;
    margin: 0;
    position: relative;
    padding: 0;
  }
`
