import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>

    <Paragrafo $tipo="secundario">
      Sou um desenvolvedor front-end júnior, apaixonado por tecnologia e em
      constante aprendizado. Este projeto foi desenvolvido como uma forma de
      demonstrar minhas habilidades técnicas e meu potencial na área. Domino{' '}
      <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,{' '}
      <strong>TypeScript</strong>, <strong>Git</strong>, <strong>Sass</strong>,{' '}
      <strong>jQuery</strong>, <strong>Bootstrap</strong>,{' '}
      <strong>React</strong> e <strong>Redux</strong>, sempre com foco em criar
      aplicações que sejam responsivas, acessíveis e otimizadas para diferentes
      dispositivos. Tenho um forte compromisso com boas práticas de
      desenvolvimento e organização de código. Minha motivação como
      desenvolvedor é criar interfaces que sejam intuitivas e impactantes,
      unindo funcionalidade e design. Durante o desenvolvimento deste projeto,
      busquei integrar tecnologias modernas e explorar formas criativas de
      solucionar desafios. Embora ainda esteja iniciando minha trajetória
      profissional, este projeto reflete minha dedicação, curiosidade e
      capacidade de entregar soluções reais. Meu objetivo é continuar aprendendo
      e contribuir para projetos desafiadores que tragam valor aos usuários e ao
      mercado.{' '}
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=srguioliveira&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=srguioliveira&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
