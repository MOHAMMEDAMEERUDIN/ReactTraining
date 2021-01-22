import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Styles.js';
import PriceDesc from './ProductInfo.js';

export default class Result extends React.Component {


    render(){
      return (
        <div style={styles.result}>
          <img style={styles.image} src={this.props.imageUrl}/>
          <PriceDesc pId={this.props.pId} mrpPrice={this.props.mrpPrice} offerPrice={this.props.offerPrice} desc={this.props.desc}/>
        </div>
      );
    }
}