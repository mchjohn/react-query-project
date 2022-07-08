<div align="center">
<img src="docs/images/react-query-logo.svg"  width="400" alt="Logo" />
<h2> React Query com TypeScript -  Queries, Mutations e Query Invalidation 
</h2>

<br>
</div>

React Query é uma biblioteca utilizada para fazer fetch, cache e update de dados em aplicações React e React Native, sem a necessidade de um estado global (Redux ou Context API).

#### React Query

- **Queries**: busca de dados através do [useQuery](https://react-query.tanstack.com/reference/useQuery#_top).
- **Mutations**: atualização de dados através do [useMutation](https://react-query.tanstack.com/reference/useMutation#_top).
- **Query Invalidation**: Mantenha suas queries sempre atualizadas de uma forma bem simples através do [queryClient.invalidateQueries](https://react-query.tanstack.com/guides/query-invalidation#_top).  

#### Rodando projeto

- Clone o repo  
`git clone git@github.com:mchjohn/react-query-project.git`  

- Instale as dependências  
`yarn`

- Crie uma API através do [mockapi.io](https://mockapi.io/)  
Pegue a `URL` da API e atribua a variável `URL` em `src/api/api.ts`  
Crie um endpoint clicando em NEW RESOURCE, com o nome `users`

- Rode o projeto  
`yarn start`