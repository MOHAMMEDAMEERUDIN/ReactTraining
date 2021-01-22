import React from 'react';
import styles from './Styles.js';
import PriceDesc from './ProductInfo.js';

const Result = (props) => {
  return (
    <div style={styles.result}>
      <img style={styles.image} src={props.imageUrl} />
      <PriceDesc pId={props.pId} mrpPrice={props.mrpPrice} offerPrice={props.offerPrice} desc={props.desc} />
    </div>
  );
}

export default Result;