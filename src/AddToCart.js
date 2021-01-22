import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Styles.js';

export default class AddToCardBtn extends React.Component {
    
    constructor(){
      super();
      this.state={"netCount":0}
    }
    
      addToCartClick = () => {
        alert('Item Added to Shopping cart'+this.props.pId);
        this.setState({"netCount":this.state.netCount+1});
        //this.props.handler(5);
      }
      removeFromCartClick = () => {
        alert('Item Removed from Shopping cart'+this.props.pId);
        this.setState({"netCount":this.state.netCount-1});
        //this.props.handler(3);
      }
  
      render () {
        return(
          <>
          { this.state.netCount==0 ? 
            <button pId={this.props.pId}  onClick={this.addToCartClick.bind(this)} style={styles.cartBtn}>Add To Cart ({this.state.netCount})</button>:
            <div style={styles.pDesc}><button style={styles.cartBtn} pId={this.props.pId} onClick={this.removeFromCartClick.bind(this)}>-</button>  {this.state.netCount}  <button style={styles.cartBtn} pId={this.props.pId} onClick={this.addToCartClick.bind(this)}>+</button></div>
          }
            
          </>
        );
      }
  }