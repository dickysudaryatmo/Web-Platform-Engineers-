import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";
import MyPokemonList from "./MyPokemonList";
import styled from '@emotion/styled';

const Ul = styled('ul')`
    background-color: #0558b6;
    padding: 0;
    margin: 0px;
`
const Li = styled('li')`
    display: inline;
    list-style-type: none;
    margin: 0;
    & > a {
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        padding: 20px;
        display: inline-block;
    }
`

const Content = styled('div')`
    background-color: #FFF;
    padding: 15px;
`

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Ul>
                        <Li>
                            <NavLink to="/">Pokemon List</NavLink>
                        </Li>
                        <Li>
                            <NavLink to="/pokemondetail">Pokemon Detail</NavLink>
                        </Li>
                        <Li>
                            <NavLink to="/mypokemonlist">My Pokemon List</NavLink>
                        </Li>
                    </Ul>
                    <Content>
                        <Route exact path="/" component={PokemonList}/>
                        <Route path="/pokemondetail" component={PokemonDetail}/>
                        <Route path="/mypokemonlist" component={MyPokemonList}/>
                    </Content>
                </div>
            </HashRouter>

        );
    }
}

export default Main;