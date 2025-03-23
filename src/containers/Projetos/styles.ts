import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`
export const TecnologyButton = styled.button`
  background-color: transparent;
  border: 1px solid gray;
  padding: 4px;
  border-radius: 2px;
  color: gray;
  cursor: pointer;
`
