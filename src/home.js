import React, { Component } from "react";
import './Anime';
import './Style.css';
 
class Home extends Component {
  render() {
    return (
        <div className="home">
        <div className="container">
        <div className="row">
            <form id="search_form" className="col s12">
                <div className="row">
                    <div className="input-field col 26">
                        <input name="search" id="search" type="text" className="validate"></input>
                        <label htmlFor="search">search</label>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div id="search-results" className="container">

    </div>
    <script src="./Anime.js"></script>

    </div>
    );
  }
}
 
export default Home;