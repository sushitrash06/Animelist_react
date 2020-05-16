import React, {Component} from 'react';
class App extends Component{

    constructor(props){
      super(props);
      this.state ={
        items:[],
        isLoaded: false
      }
    }
    componentDidMount(){
      fetch('https://api.jikan.moe/v3/top/anime/1/tv')
        .then(res => res.json())
        .then(json => {
          this.setState({
            items: json.top,
            image:json.top,
            isLoaded: true,
          })
        }).catch((err)=>{
          console.log(err);
        });
    }
    render(){
      var{ isLoaded, items,image } = this.state;

      if (!isLoaded){
        return <div>Loading...</div>; 
      }
      else{
        return(
          <div className="App"> 

            <ul>
              {items.map(item => (
                <li key={item.mal_id}>

                  Rank : {item.rank} | Title : {item.title} | 
                  <img src= {item.image_url} alt = "img"></img>

                </li>


              ))}

            </ul>
          </div>
        );
      }
      
    }
}
export default App;
