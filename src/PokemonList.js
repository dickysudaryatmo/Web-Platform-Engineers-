import React, {Component} from "react";
import {gql, useQuery, ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { useHistory } from 'react-router-dom';

const client = new ApolloClient({uri: 'https://graphql-pokeapi.graphcdn.app/', cache: new InMemoryCache()});

const GET_POKEMONS = gql `
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

const gqlVariables = {
    limit: 2,
    offset: 1
};

// const history = useHistory();

export const Todos = () => {
    const {loading, error, data} = useQuery(GET_POKEMONS, {variables: gqlVariables});

    if (loading) 
        return 'Loading...';
    if (error) 
        return `Error! ${error.message}`;
    
    console.log('Response from server', data);
    // return 'Success!';
    return data.pokemons.results.map((pokemon)=>(
        <div>
            <div className="pokemon_data">
                <p>Pokemon Name: {pokemon.name}</p>
                <p>Owned Total: </p>
                {/* <button onClick={() => history.push(`/pokemondetail/${pokemon.name}`)} >Detail Pokemon</button> */}
                {/* <img src={pokemon.image}></img> */}
            </div>
        </div>
    ));
};

class PokemonList extends Component {
    render() {
        return (
            <div>
                <b>Pokemon List</b>
                <ApolloProvider client={client}>
                    <Todos/>
                </ApolloProvider>
            </div>
        );
    }
}

export default PokemonList;