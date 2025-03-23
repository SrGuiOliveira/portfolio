import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  const [usingDark, setUsingDark] = useState(false)

  function TrocarTema() {
    setUsingDark(!usingDark)
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={usingDark ? temaDark : temaLight}>
        <EstiloGlobal />
        <Container>
          <Sidebar trocaTema={TrocarTema} />
          <main>
            <Sobre />
            <Projetos />
          </main>
        </Container>
      </ThemeProvider>
    </Provider>
  )
}
export default App
