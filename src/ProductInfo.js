import React from 'react';
import styles from './Styles.js';
import AddToCardBtn from './AddToCart.js';

const PriceDesc = (props) => {
  return (
    <>
      <p style={styles.mrpPrice}>{props.mrpPrice}</p>
      <h4 style={styles.offerPrice}>{props.offerPrice}</h4>
      <p style={styles.pDesc}>{props.desc}</p>
      <AddToCardBtn pId={props.pId} />
    </>
  )
}

export default PriceDesc;



