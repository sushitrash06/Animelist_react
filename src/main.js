import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './home';
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
                
            </HashRouter>
        );
    }
}
export default Main;
