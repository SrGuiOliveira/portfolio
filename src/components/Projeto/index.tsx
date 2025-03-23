import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

type ProjetoProps = {
  titulo: string
  descricao: React.ReactNode
  url: string
  extraContent?: React.ReactNode
}

const Projeto = ({ titulo, descricao, url, extraContent }: ProjetoProps) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Paragrafo $tipo="secundario">{descricao}</Paragrafo>
    {extraContent && <div style={{ marginTop: '8px' }}>{extraContent}</div>}
    <LinkBotao href={url} target="_blank" rel="noopener noreferrer">
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto
