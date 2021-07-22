import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { PokemonsContainer } from './containers/PokemonsContainer'
import { Header } from './components/Header'

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
  })
  return (
    <ApolloProvider client={client}>
      <main>
        <Header />
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  )
}

export default App
