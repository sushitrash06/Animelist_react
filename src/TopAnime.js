import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import './Style.css';
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

            {items.map(item =>(
              <Card style={{ width: '18rem' }} key={item.mal_id}>
            <Card.Img variant="top" src={item.image_url} alt="img"/>
          <Card.Body>
        <Card.Title>Rank : {item.rank}</Card.Title>
        <Card.Text>
          {item.title}
          </Card.Text>
      </Card.Body>
    </Card>
    ))}
              </div>
            
        );
      }
      
    }
}
export default App;
