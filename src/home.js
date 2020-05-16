import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
        <div className="home">
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
    </div>
    );
  }
}
 
export default Home;