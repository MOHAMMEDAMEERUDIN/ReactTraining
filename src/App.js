import React, {Component, useState , useEffect} from 'react';

import ReactDOM from 'react-dom';
import datas from './datas.json';
import Header from './Header.js';
import Result from './Result.js';
import axios from 'axios';

const App =() =>{
  var [datas , setDatas] = useState();
  useEffect(()=>{
   
      fetch(
        'http://10.5.5.104:8080/hmhstudents/data/shopiee/getAllProducts',
        {
          method : 'GET',
          mode: 'no-cors'
        }
      )
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setDatas(response);
      })
  });

  return (
    <>
      <Header />
      {datas.prods.map(function (product, index) {
        return <Result pId={product.productId} mrpPrice={product.mrpPrice} offerPrice={product.offerPrice} desc={product.desc} imageUrl={product.imageUrl} />
      })}
    </>
  );
}

export default App;




/*class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=200").then(json => {
      console.log(json);
        this.setState({ products: json.data.results });
    });
  }

  render() {
    return (
      <>
        <Header />
        {this.state.products.map(function (product, index) {
              return <p>{product.name}</p>
            })}
      </>
    )
  }
}

export default App;*/

