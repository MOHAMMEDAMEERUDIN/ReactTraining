import React from 'react';
import ReactDOM from 'react-dom';
import products from './datas.json';
import Header from './Header.js';
import Result from './Result.js';


export default class App extends React.Component {
  constructor(props){
    super(props);
    
  }
 
  render(){
    return (
      <>
        <Header />
        {products.map(function(product, index){
          return  <Result pId = {product.productId} mrpPrice ={product.mrpPrice} offerPrice ={product.offerPrice} desc ={product.desc} imageUrl={product.imageUrl}/>
        })}
    </>
    );
  }
}

