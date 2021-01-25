import React, {Component, useState , useEffect} from 'react';

import ReactDOM from 'react-dom';
import datas from './datas.json';
import Header from './Header.js';
import Result from './Result.js';
import axios from 'axios';

const App =() =>{
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



//******************************** Class Component api call ******************************
/*class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokes: []
    }
  }

  componentDidMount = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=200").then(json => {
      console.log(json);
        this.setState({ pokes: json.data.results });
    });
  }

  render() {
    return (
      <>
        <Header />
        <strong>Class Component with componentDidMount() using Axios API call</strong>
        <table style={{width:'100%'}}>
          <tr style={{border:'2px solid red'}}>
            <th>SI No</th>
            <th>Name</th>
            <th>Url</th>
          </tr>
          {this.state.pokes.map(function (poke, index) {
              return <>                  
                <tr style={{border:'1px solid orange'}}>
                  <td>{index+1}</td>
                  <td>{poke.name.toUpperCase()}</td>
                  <td><a href={poke.url}>{poke.url}</a></td>
                </tr>
              </>
            })}
        </table>
      </>
    )
  }
}

export default App;*/


//******************************** Functional Component api call ******************************

/*const App = () => {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200");
      res.json()
        .then(res => {
          console.log(res.results.map(function (poke, index) {
            return <p>{poke.name}</p>
          }));
          setPokes(res.results)
        })
    }

    fetchData();
  });

  return (
    <>
        <Header />
        <strong>Functional Component with Hooks useEffect() using async fetch api call</strong>
        <table style={{width:'100%'}}>
          <tr style={{border:'2px solid red'}}>
            <th>SI No</th>
            <th>Name</th>
            <th>Url</th>
          </tr>
          {pokes.map(function (poke, index) {
              return <>                  
                <tr style={{border:'1px solid blue'}}>
                  <td>{index+1}</td>
                  <td>{poke.name.toUpperCase()}</td>
                  <td><a href={poke.url}>{poke.url}</a></td>
                </tr>
              </>
            })}
        </table>

      </>
  );
};
export default App;*/