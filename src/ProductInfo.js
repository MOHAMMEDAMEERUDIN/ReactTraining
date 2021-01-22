import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Styles.js';
import AddToCardBtn from './AddToCart.js';

  
  export default class PriceDesc extends React.Component {
      render () {
        return(
          <>
            <p style={styles.mrpPrice}>{this.props.mrpPrice}</p>
            <h4 style={styles.offerPrice}>{this.props.offerPrice}</h4>
            <p style={styles.pDesc}>{this.props.desc}</p>
            <AddToCardBtn pId={this.props.pId}/>
          </>
        );
      }
  }


