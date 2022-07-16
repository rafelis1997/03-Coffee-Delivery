import { ShoppingCart } from 'phosphor-react'
import { CoffeeItem } from './components/CoffeeItem'
import {
  CoffeeContainer,
  CoffeeList,
  HeroContainer,
  HeroItemsContainer,
  HeroSection,
  HeroTitleContainer,
  HomeContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContainer>
          <HeroTitleContainer>
            <div>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </div>
            <HeroItemsContainer>
              <div>
                <p>
                  <ShoppingCart size={20} weight="fill" />
                </p>

                <span>Compra simples e segura</span>
              </div>
              <div>
                <p>
                  <ShoppingCart size={20} weight="fill" />
                </p>

                <span>Compra simples e segura</span>
              </div>
              <div>
                <p>
                  <ShoppingCart size={20} weight="fill" />
                </p>

                <span>Compra simples e segura</span>
              </div>
              <div>
                <p>
                  <ShoppingCart size={20} weight="fill" />
                </p>

                <span>Compra simples e segura</span>
              </div>
            </HeroItemsContainer>
          </HeroTitleContainer>
          <img
            src="./public/coffeImg.png"
            alt="Copo de café rodeado de grãos de café"
          />
        </HeroContainer>
      </HeroSection>
      <CoffeeContainer>
        <header>
          <h1>Nossos Cafés</h1>
          <nav>
            <button onClick={() => {}}>TRADICIONAL</button>
            <button onClick={() => {}}>ESPECIAL</button>
            <button onClick={() => {}}>COM LEITE</button>
            <button onClick={() => {}}>ALCOÓLICO</button>
            <button onClick={() => {}}>GELADO</button>
          </nav>
        </header>
        <CoffeeList>
          <CoffeeItem />
        </CoffeeList>
      </CoffeeContainer>
    </HomeContainer>
  )
}
