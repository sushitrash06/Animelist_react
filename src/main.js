import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Anime';
import TopAnime from './TopAnime';
import kontak from './kontak';



class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <h1 className="Judul">Anime Weebs</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>    
                        <li><NavLink to="/TopAnime">Top Anime</NavLink></li>
                        <li><NavLink to ="/kontak">kontak</NavLink></li>
                    </ul>
                <div className="content">
                    <Route exact path ="/" component={Home}/>
                    <Route exact path ="/TopAnime" component={TopAnime}/>
                    <Route exact path ="/kontak" component={kontak}/>
                </div>                    
                </div>
                <div className="container">
                    <div className="row">
                        <form id="search_form" className="col s12">
                            <div className="row">
                                <div class="input-field col 26">
                                    <input placeholder="Placeholder" name="search" id="search" type="text" className="validate"></input>
                                    <label for="search">search</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="search-results" className="container">

                </div>
                <script src="./Anime.js"></script>
            </HashRouter>
        );
    }
}
export default Main;
