import React, {useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import datas from './datas.json';
import Header from './Header.js';
import Result from './Result.js';


const App =() =>{
  useEffect(()=>{
      fetch(
        ''
      )
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

