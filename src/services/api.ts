import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Projeto } from '../types/project'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com'
  }),
  endpoints: (builder) => ({
    getRepos: builder.query<Projeto[], void>({
      query: () => '/users/srguioliveira/repos'
    }),
    getRepoLanguages: builder.query<Record<string, number>, string>({
      query: (repoName) => `/repos/srguioliveira/${repoName}/languages`
    })
  })
})

export const { useGetReposQuery, useGetRepoLanguagesQuery } = api

export default api
