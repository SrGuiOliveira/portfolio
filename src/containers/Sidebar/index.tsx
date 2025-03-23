import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import SocialMedia from '../../components/SocialMedia'

import { Descricao, NomeUsuario, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <NomeUsuario fontSize={20}>Guilherme Oliveira</NomeUsuario>
      <Paragrafo $tipo="secundario" fontSize={16}>
        srguioliveira
      </Paragrafo>
      <Descricao $tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Descricao>
      <SocialMedia />
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
