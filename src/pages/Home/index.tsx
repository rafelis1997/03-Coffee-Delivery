import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { CoffeeItem } from './components/CoffeeItem'
import {
  ButtonFilter,
  CoffeeContainer,
  CoffeeList,
  HeroContainer,
  HeroItems,
  HeroItemsContainer,
  HeroSection,
  HeroTitleContainer,
  HomeContainer,
} from './styles'

export interface CoffeeProps {
  id: number
  imgUrl: string
  labels: string[]
  title: string
  subtitle: string
  price: number
}

interface FilterButtonsProps {
  id: number
  title: string
  isActive: boolean
}

const initialState = [
  {
    id: 1,
    title: 'todos',
    isActive: true,
  },
  {
    id: 2,
    title: 'Tradicional',
    isActive: false,
  },
  {
    id: 3,
    title: 'especial',
    isActive: false,
  },
  {
    id: 4,
    title: 'com leite',
    isActive: false,
  },
  {
    id: 5,
    title: 'alcoólico',
    isActive: false,
  },
  {
    id: 6,
    title: 'gelado',
    isActive: false,
  },
]

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  const [filtersButtons, setFiltersButtons] =
    useState<FilterButtonsProps[]>(initialState)
  const [filters, setFilters] = useState<string[]>([])

  useEffect(() => {
    const formattedFilters: string[] = []
    filters.map((filter) => {
      return formattedFilters.push('labels_like=' + filter)
    })

    async function getCoffeeData() {
      await fetch(`http://localhost:3004/coffee?${formattedFilters.join('&')}`)
        .then((response) => response.json())
        .then((data) => {
          setCoffees(data)
        })
    }
    getCoffeeData()
  }, [filters])

  function handleFiltering(event: React.MouseEvent | React.TouchEvent) {
    const button = event.target as HTMLElement

    const filterId = Number(button.dataset.id)

    if (filterId === 1) {
      setFiltersButtons(initialState)
      setFilters([])
    } else {
      const changedFilterButtons = filtersButtons.map((filter) => {
        if (filter.id === filterId) {
          const filterIsActive = filter.isActive
          return { ...filter, isActive: !filterIsActive }
        } else if (filter.id === 1) {
          return { ...filter, isActive: false }
        } else {
          return { ...filter }
        }
      })
      const activatedValidation = changedFilterButtons.filter((e) => {
        return e.isActive === true
      })
      if (activatedValidation.length > 0) {
        setFiltersButtons(changedFilterButtons)

        const newFilteredList = activatedValidation.map((active) => {
          return active.title.toLowerCase().replace(' ', '').replace('ó', 'o')
        })

        setFilters(newFilteredList)
      } else {
        setFiltersButtons(initialState)
        setFilters([])
      }
    }
  }

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
                <HeroItems itemsColor="dark_yellow">
                  <ShoppingCart size={20} weight="fill" />
                </HeroItems>

                <span>Compra simples e segura</span>
              </div>
              <div>
                <HeroItems itemsColor="dark">
                  <Package size={20} weight="fill" />
                </HeroItems>

                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <HeroItems itemsColor="yellow">
                  <Timer size={20} weight="fill" />
                </HeroItems>

                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <HeroItems itemsColor="purple">
                  <Coffee size={20} weight="fill" />
                </HeroItems>

                <span>O café chega fresquinho até você</span>
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
            {filtersButtons.map((filter) => (
              <ButtonFilter
                key={filter.id}
                data-id={filter.id}
                onClick={handleFiltering}
                value={filter.title.toUpperCase()}
                isSelected={filter.isActive}
              >
                {filter.title.toUpperCase()}
              </ButtonFilter>
            ))}
          </nav>
        </header>
        <CoffeeList>
          {coffees.map((coffee) => {
            return <CoffeeItem coffee={coffee} key={coffee.id} />
          })}
        </CoffeeList>
      </CoffeeContainer>
    </HomeContainer>
  )
}
