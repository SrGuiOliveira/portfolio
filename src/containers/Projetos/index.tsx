import React, { useState } from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista, TecnologyButton } from './styles'
import { useGetReposQuery, useGetRepoLanguagesQuery } from '../../services/api'
import Paragrafo from '../../components/Paragrafo'

const Projetos = () => {
  const { data: repos, isLoading, error } = useGetReposQuery()

  if (isLoading) return <p>Carregando projetos...</p>
  if (error) return <p>Erro ao carregar os projetos.</p>

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {repos?.map((repo) => (
          <li key={repo.id}>
            <ProjetoWithLanguages
              titulo={repo.name}
              url={repo.html_url}
              repoName={repo.name}
            />
          </li>
        ))}
      </Lista>
    </section>
  )
}

const ProjetoWithLanguages = ({
  titulo,
  url,
  repoName
}: {
  titulo: string
  url: string
  repoName: string
}) => {
  const [showLanguages, setShowLanguages] = useState(false)

  const { data: languages, isLoading: languagesLoading } =
    useGetRepoLanguagesQuery(repoName, {
      skip: !showLanguages
    })

  return (
    <Projeto
      titulo={titulo}
      descricao={
        <>
          <Paragrafo $tipo="secundario">
            <strong>Tecnologias:</strong>
          </Paragrafo>
          <div style={{ marginTop: '8px', marginBottom: '8px' }}>
            <TecnologyButton onClick={() => setShowLanguages(!showLanguages)}>
              {showLanguages ? 'Ocultar tecnologias' : 'Mostrar tecnologias'}
            </TecnologyButton>
          </div>
          <div>
            {showLanguages
              ? languagesLoading
                ? 'Carregando tecnologias...'
                : languages && Object.keys(languages).length > 0
                ? Object.keys(languages).join(', ')
                : 'Nenhuma tecnologia encontrada'
              : 'Clique no botão acima para carregar tecnologias'}
          </div>
        </>
      }
      url={url}
    />
  )
}

export default Projetos
