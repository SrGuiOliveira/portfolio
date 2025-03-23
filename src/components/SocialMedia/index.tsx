import { SocialImages, SocialLinks, SocialList } from './styles'
import gmail from '../../icons/gmail.svg'
import linkedin from '../../icons/linkedin.svg'
import github from '../../icons/github.svg'

const SocialMedia = () => (
  <SocialList>
    <SocialLinks href="mailto:gui.live012@gmail.com">
      <SocialImages src={gmail} alt="Ícone do Gmail" />
    </SocialLinks>
    <SocialLinks
      target="_blank"
      href="https://www.linkedin.com/in/guilherme-oliveira-952854138/"
    >
      <SocialImages src={linkedin} alt="Ícone do LinkedIn" />
    </SocialLinks>
    <SocialLinks target="_blank" href="https://github.com/SrGuiOliveira">
      <SocialImages src={github} alt="Ícone do GitHub" />
    </SocialLinks>
  </SocialList>
)

export default SocialMedia
