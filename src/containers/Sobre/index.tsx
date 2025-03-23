import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>

    <Paragrafo $tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatum
      beatae. Officia deserunt amet, minus suscipit vel culpa eos explicabo quam
      recusandae consequuntur iure inventore illo quisquam est perspiciatis in?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=srguioliveira&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=srguioliveira&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
